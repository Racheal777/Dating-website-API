import mongoose from 'mongoose'

let dbName = process.env.DB_NAME
let dbUrl = `mongodb://0.0.0.0:27017/${dbName}`

const options = {
  autoIndex: false, // Don't build indexes
  maxPoolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4, // Use IPv4, skip trying IPv6
  useUnifiedTopology: true,
  useNewUrlParser:true
 
  
};

export const dbConnection = async() => {
    try {
     
        await mongoose.connect(dbUrl, options)
        console.log(`database connection success ${dbName}`)  
    } catch (error) {
      console.log(error)  
    }

   
}


