import { createApp } from './app'
import dotenv from 'dotenv'
dotenv.config()

const app = createApp()




app.listen(process.env.PORT || 3001, () => console.log(`Server is listening on ${process.env.PORT || 3001}`))
