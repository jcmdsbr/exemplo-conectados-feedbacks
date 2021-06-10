import IFeedbackRepository from '../contracts/feedback-repository.contract'
import { Feedback } from '../entities/feedback.entity'
import { CreateFeedbackValidator } from '../validators/create-feedback.validator'
export class CreateFeedbackUseCase {
  private readonly repository: IFeedbackRepository
  constructor (repository: IFeedbackRepository) {
    this.repository = repository
  }

  async execute (request: { description: string, receiver: string }) {
    const validator = new CreateFeedbackValidator()
    validator.validate(request)
    const feedback = new Feedback(request)
    await this.repository.add(feedback)
  }
}
