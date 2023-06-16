import z from 'zod'
import { FastifyReply, FastifyRequest } from 'fastify'

import { makeFetchUserCheckInsHistoryUseCase } from '@/use-cases/factories/make-fetch-user-check-ins-history-use-case'

export async function history(req: FastifyRequest, reply: FastifyReply) {
  const checkInHistoryQuerySchema = z.object({
    page: z.coerce.number().min(1).default(1),
  })

  const { page } = checkInHistoryQuerySchema.parse(req.query)

  const fetchUserCheckInsHistoryUseCase = makeFetchUserCheckInsHistoryUseCase()

  const checkIns = await fetchUserCheckInsHistoryUseCase.execute({
    userId: req.user.sub,
    page,
  })

  return reply.status(201).send({
    checkIns,
  })
}
