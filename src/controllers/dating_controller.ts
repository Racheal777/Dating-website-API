import {Request, Response} from 'express'
import { ResponseData } from '../middleware/helper'


export class DatingController {

    static checkHealth = async (req: Request, res:Response) => {
        try {
            res.status(200).send(ResponseData.responseJson('Welcome', 200, 'success')) 
        } catch (error) {
         return error   
        }
       
    }
}