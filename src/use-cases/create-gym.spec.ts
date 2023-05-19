import { describe, it, expect, beforeEach } from 'vitest'

import { CreateGymUseCase } from './create-gym'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'

let sut: CreateGymUseCase
let usersRepository: InMemoryGymsRepository

describe('Create Gym Use Case', () => {
  beforeEach(() => {
    usersRepository = new InMemoryGymsRepository()
    sut = new CreateGymUseCase(usersRepository)
  })

  it('should be able to create Gym', async () => {
    const { gym } = await sut.execute({
      phone: null,
      title: 'Gym 01',
      description: null,
      latitude: -23.6769801,
      longitude: -46.6820222,
    })

    expect(gym.id).toEqual(expect.any(String))
  })
})
