import { Decimal } from '@prisma/client/runtime'
import { describe, it, expect, beforeEach, vi, afterAll } from 'vitest'

import { CheckInUseCase } from './check-in'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { InMemoryCheckInsRepository } from '@/repositories/in-memory/in-memory-check-ins-repository'

let sut: CheckInUseCase
let gymsRepository: InMemoryGymsRepository
let checkInsRepository: InMemoryCheckInsRepository

describe('Check-in Use Case', () => {
  beforeEach(() => {
    checkInsRepository = new InMemoryCheckInsRepository()
    gymsRepository = new InMemoryGymsRepository()
    sut = new CheckInUseCase(gymsRepository, checkInsRepository)

    gymsRepository.items.push({
      id: 'gym-01',
      phone: '123456789',
      title: 'Academia 01',
      description: 'Academia 01',
      latitude: new Decimal(-23.6769801),
      longitude: new Decimal(-46.6820222),
    })

    vi.useFakeTimers()
  })

  afterAll(() => {
    vi.useRealTimers()
  })

  it('should be able to check in', async () => {
    const { checkIn } = await sut.execute({
      gymId: 'gym-01',
      userId: 'user-01',
      userLatitude: -23.6769801,
      userLongitude: -46.6820222,
    })

    expect(checkIn.id).toEqual(expect.any(String))
  })

  it('should not be able to check in twice in the same day', async () => {
    vi.setSystemTime(new Date(2023, 0, 20, 5, 0, 0))

    await sut.execute({
      gymId: 'gym-01',
      userId: 'user-01',
      userLatitude: -23.6769801,
      userLongitude: -46.6820222,
    })

    await expect(() =>
      sut.execute({
        gymId: 'gym-01',
        userId: 'user-01',
        userLatitude: -23.6769801,
        userLongitude: -46.6820222,
      }),
    ).rejects.toBeInstanceOf(Error)
  })

  it('should be able to check in twice but in different days', async () => {
    vi.setSystemTime(new Date(2023, 0, 20, 5, 0, 0))

    await sut.execute({
      gymId: 'gym-01',
      userId: 'user-01',
      userLatitude: -23.6769801,
      userLongitude: -46.6820222,
    })

    vi.setSystemTime(new Date(2023, 0, 21, 5, 0, 0))

    const { checkIn } = await sut.execute({
      gymId: 'gym-01',
      userId: 'user-01',
      userLatitude: -23.6769801,
      userLongitude: -46.6820222,
    })

    expect(checkIn.id).toEqual(expect.any(String))
  })

  it('should not be able to check in on distant gym', async () => {
    gymsRepository.items.push({
      id: 'gym-02',
      phone: '123456789',
      title: 'Academia 02',
      description: 'Academia 02',
      latitude: new Decimal(-23.5466673),
      longitude: new Decimal(-46.4735583),
    })

    await expect(() =>
      sut.execute({
        gymId: 'gym-02',
        userId: 'user-01',
        userLatitude: -23.6769801,
        userLongitude: -46.6820222,
      }),
    ).rejects.toBeInstanceOf(Error)
  })
})
