import Joi from 'joi'

export class CreateFeedbackValidator {
  private readonly schema: Joi.ObjectSchema
  constructor () {
    this.schema = Joi.object({
      description: Joi.string().min(5).max(30).required(),
      receiver: Joi.string().min(3).max(10).required()
    })
  }

  validate (payload: any): void {
    const { error } = this.schema.validate(payload)
    if (error) throw new Error(error.details.map(x => x.message).join(','))
  }
}
