import { DatingRoutes }  from './routes'
import {Router} from 'express'
import {DatingController} from '../src/controllers/index'


export const datingRouter = Router()



datingRouter.get(DatingRoutes.CHECK_HEALTH, DatingController.checkHealth)
