import { describe, it, expect, beforeEach } from 'vitest'

import { FetchNearbyGymsUseCase } from './fetch-nearby-gyms'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'

let sut: FetchNearbyGymsUseCase
let gymsRepository: InMemoryGymsRepository

describe('Fetch Nearby Gyms Use Case', () => {
  beforeEach(async () => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new FetchNearbyGymsUseCase(gymsRepository)
  })

  it('should be able to fetch nearby gyms', async () => {
    await gymsRepository.create({
      phone: null,
      title: 'Near Gym',
      description: null,
      latitude: -23.6769801,
      longitude: -46.6820222,
    })

    await gymsRepository.create({
      phone: null,
      title: 'Far Gym',
      description: null,
      latitude: -23.5466673,
      longitude: -46.4735583,
    })

    const { gyms } = await sut.execute({
      userLatitude: -23.6769801,
      userLongitude: -46.6820222,
    })

    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual([
      expect.objectContaining({
        title: 'Near Gym',
      }),
    ])
  })
})
