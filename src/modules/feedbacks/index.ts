import { FeedbackRepository } from './repositories/feedback.repository'
import { CreateFeedbackUseCase } from './use-cases/create-feedback.use-case'
import { FindFeedbacksUseCase } from './use-cases/find-feedbacks.use-case'
import { FeedbackController } from './feedback.controller'

const repository = new FeedbackRepository()

const createFeedbackUseCase = new CreateFeedbackUseCase(repository)

const findFeedbacksUseCase = new FindFeedbacksUseCase(repository)

const feedbackController = new FeedbackController(createFeedbackUseCase, findFeedbacksUseCase)

export { feedbackController }
