import { DatingRoutes }  from './routes'
import {Router} from 'express'
import {DatingController} from '../src/controllers/index'


export const datingRouter = Router()

const datingController = new DatingController()

datingRouter.get(DatingRoutes.CHECK_HEALTH, datingController.checkHealth)
