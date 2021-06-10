import { Router } from 'express'
import { feedbackController } from './modules/feedbacks'

const router = Router()

router.get('/api/v1/feedbacks', (req, res) => feedbackController.findFeedbacks(req, res))
router.post('/api/v1/feedbacks', (req, res) => feedbackController.createFeedback(req, res))

export { router }
