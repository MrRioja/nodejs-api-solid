import { compare } from 'bcryptjs'
import { describe, it, expect, beforeEach } from 'vitest'

import { RegisterUseCase } from './register'
import { UserAlreadyExistsError } from './errors/user-already-exists-error'
import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'

let usersRepository: InMemoryUsersRepository
let sut: RegisterUseCase

describe('Register Use Case', () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()
    sut = new RegisterUseCase(usersRepository)
  })

  it('should hash user password upon registration', async () => {
    const { user } = await sut.execute({
      name: 'John Doe',
      password: '123456',
      email: 'johndoe@example.com',
    })

    const isPasswordCorrectlyHashed = await compare(
      '123456',
      user.password_hash,
    )

    expect(isPasswordCorrectlyHashed).toBe(true)
  })

  it('should not be able to register with same email twice', async () => {
    const email = 'johndoe@example.com'

    await sut.execute({
      email,
      name: 'John Doe',
      password: '123456',
    })

    await expect(() =>
      sut.execute({
        email,
        name: 'John Doe',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(UserAlreadyExistsError)
  })

  it('should be able to register', async () => {
    const { user } = await sut.execute({
      name: 'John Doe',
      password: '123456',
      email: 'johndoe@example.com',
    })

    expect(user.id).toEqual(expect.any(String))
  })
})
