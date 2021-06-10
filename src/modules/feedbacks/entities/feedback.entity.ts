import { v4 } from 'uuid'

export class Feedback {
  public readonly id: string
  public readonly description: string = ''
  public readonly createdAt: Date
  public readonly receiver: string = ''

  constructor (props: Omit<Feedback, 'id' | 'createdAt'>, id?: string, createdAt? : Date) {
    Object.assign(this, props)

    this.id = id || v4()
    this.createdAt = createdAt || new Date()
  }
}
