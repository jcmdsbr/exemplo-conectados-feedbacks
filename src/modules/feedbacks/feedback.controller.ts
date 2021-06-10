
export class FeedbackController {
  async createFeedback (req: any, res: any) : Promise<any> {
    return res.send(201)
  }

  async findFeedbacks (req: any, res: any): Promise<any> {
    return res.send(200)
  }
}
