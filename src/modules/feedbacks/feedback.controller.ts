import express from 'express'
import { CreateFeedbackUseCase } from './use-cases/create-feedback.use-case'
import { FindFeedbacksUseCase } from './use-cases/find-feedbacks.use-case'

export class FeedbackController {
  private readonly createUseCase: CreateFeedbackUseCase
  private readonly findFeedbacksUseCase: FindFeedbacksUseCase

  constructor (
    createUseCase: CreateFeedbackUseCase,
    findFeedbacksUseCase: FindFeedbacksUseCase) {
    this.createUseCase = createUseCase
    this.findFeedbacksUseCase = findFeedbacksUseCase
  }

  async createFeedback (req: express.Request, res: express.Response) : Promise<express.Response> {
    try {
      const { description, receiver } = req.body
      await this.createUseCase.execute({ description, receiver })
      return res.sendStatus(201)
    } catch (error : any) {
      return res.status(400).send({
        messages: error.message
      })
    }
  }

  async findFeedbacks (req: express.Request, res: express.Response): Promise<express.Response> {
    const receiver = req.query.receiver?.toString()
    const feedbacks = await this.findFeedbacksUseCase.execute({ receiver })
    if (feedbacks?.length > 0) return res.status(200).send(feedbacks)
    return res.sendStatus(204)
  }
}
