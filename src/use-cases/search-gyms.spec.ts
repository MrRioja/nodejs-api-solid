import { describe, it, expect, beforeEach } from 'vitest'

import { SearchGymsUseCase } from './search-gyms'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'

let sut: SearchGymsUseCase
let gymsRepository: InMemoryGymsRepository

describe('Search Gyms Use Case', () => {
  beforeEach(async () => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new SearchGymsUseCase(gymsRepository)
  })

  it('should be able to search for gyms', async () => {
    await gymsRepository.create({
      phone: null,
      title: 'Gym 01',
      description: null,
      latitude: -23.6769801,
      longitude: -46.6820222,
    })

    await gymsRepository.create({
      phone: null,
      title: 'Gym 02',
      description: null,
      latitude: -23.6769801,
      longitude: -46.6820222,
    })

    const { gyms } = await sut.execute({
      query: 'Gym 01',
      page: 1,
    })

    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual([
      expect.objectContaining({
        title: 'Gym 01',
      }),
    ])
  })

  it('should be able to fetch paginated gyms search', async () => {
    for (let i = 1; i <= 22; i++) {
      await gymsRepository.create({
        phone: null,
        title: `Gym ${i}`,
        description: null,
        latitude: -23.6769801,
        longitude: -46.6820222,
      })
    }

    const { gyms } = await sut.execute({
      query: 'Gym',
      page: 2,
    })

    expect(gyms).toHaveLength(2)
    expect(gyms).toEqual([
      expect.objectContaining({
        title: 'Gym 21',
      }),
      expect.objectContaining({
        title: 'Gym 22',
      }),
    ])
  })
})
