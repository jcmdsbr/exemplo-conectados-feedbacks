import express from 'express'
import { router } from './routes'

class Startup {
  public readonly app: express.Express

  constructor () {
    this.app = express()
    this.configure()
  }

  configure () {
    this.app.use(express.json())
    this.app.use(router)
  }
}

export default Startup
