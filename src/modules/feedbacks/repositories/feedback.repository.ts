import IFeedbackRepository from '../contracts/feedback-repository.contract'
import { Feedback } from '../entities/feedback.entity'
export class FeedbackRepository implements IFeedbackRepository {
  private feedbacks : Feedback[] = []

  async findByReceiver (receiver: string): Promise<Feedback | undefined > {
    return this.feedbacks.find(user => user.receiver === receiver)
  }

  async add (feedback: Feedback): Promise<void> {
    this.feedbacks.push(feedback)
  }

  async findAll (): Promise<Feedback[]> {
    return this.feedbacks
  }
}
