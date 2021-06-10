import { Feedback } from '../entities/feedback.entity'
export default interface IFeedbackRepository {
  findAll(): Promise<Feedback[]>;
  findByReceiver(receiver: string): Promise<Feedback | undefined>
  add(feedback: Feedback) : Promise<void>
}
