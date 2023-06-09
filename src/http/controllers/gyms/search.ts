import z from 'zod'
import { FastifyReply, FastifyRequest } from 'fastify'

import { makeSearchGymsUseCase } from '@/use-cases/factories/make-search-gyms-use-case'

export async function search(req: FastifyRequest, reply: FastifyReply) {
  const searchGymsQuerySchema = z.object({
    q: z.string(),
    page: z.coerce.number().min(1).default(1),
  })

  const { page, q } = searchGymsQuerySchema.parse(req.body)

  const searchGymsUseCase = makeSearchGymsUseCase()

  const gyms = await searchGymsUseCase.execute({
    page,
    query: q,
  })

  return reply.status(201).send({
    gyms,
  })
}