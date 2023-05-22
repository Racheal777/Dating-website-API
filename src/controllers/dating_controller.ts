import {Request, Response} from 'express'


export class DatingController {

     checkHealth = async (req: Request, res:Response) => {
        res.send('Welcome')
    }
}