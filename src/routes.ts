import { Router } from 'express'
import { FeedbackController } from './modules/feedbacks/feedback.controller'

const router = Router()
const controller = new FeedbackController()

router.get('/api/v1/feedbacks', controller.findFeedbacks)
router.post('/api/v1/feedbacks', controller.createFeedback)

export { router }
