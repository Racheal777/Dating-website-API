import { createApp } from './app'
import dotenv from 'dotenv'
dotenv.config()

import { dbConnection } from './config/db.config'

const app = createApp()


dbConnection().then(() => {
    app.listen(process.env.PORT || 3001, () => console.log(`Server is listening on ${process.env.PORT || 3001}`))

}).catch((e) => {
    console.log(e.message)
    process.exit(0)
})
