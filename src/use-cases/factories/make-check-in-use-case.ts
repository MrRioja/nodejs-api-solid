import { CheckInUseCase } from '../check-in'
import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'
import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-repository'

export function makeCheckInUseCase() {
  const gymsRepository = new PrismaGymsRepository()
  const checkInsRepository = new PrismaCheckInsRepository()
  const useCase = new CheckInUseCase(gymsRepository, checkInsRepository)

  return useCase
}
