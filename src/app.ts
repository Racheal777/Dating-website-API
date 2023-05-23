import express from 'express'
 import cors from 'cors'
 import { datingRouter } from './router'
 import helmet from 'helmet'
// import cookieParser from 'cookie-parser'



export function createApp(){
  
  const app = express()
  app.use(express.json())
  app.use(express.urlencoded({extended: true}))
//   app.use(cookieParser())
  app.use(helmet())
  app.use(cors({
      origin: ["http://localhost:8000"],
      credentials: true,
    }))

  app.use('/api/v1', datingRouter)


    return app
  
}






