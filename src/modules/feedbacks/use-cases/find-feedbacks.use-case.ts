import IFeedbackRepository from '../contracts/feedback-repository.contract'
import { Feedback } from '../entities/feedback.entity'
export class FindFeedbacksUseCase {
  private readonly repository: IFeedbackRepository

  constructor (repository: IFeedbackRepository) {
    this.repository = repository
  }

  async execute (request: { receiver?: string | undefined }): Promise<Feedback[]> {
    if (request.receiver) {
      const feedback = await this.repository.findByReceiver(request.receiver)
      if (feedback) return [feedback]
      return []
    }
    return await this.repository.findAll()
  }
}
