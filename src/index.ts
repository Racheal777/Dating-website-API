import { createApp } from './app'
import dotenv from 'dotenv'
dotenv.config()

import { dbConnection } from './config/db.config'

const app = createApp()


dbConnection()
app.listen(process.env.PORT || 3001, () => console.log(`Server is listening on ${process.env.PORT || 3001}`))
