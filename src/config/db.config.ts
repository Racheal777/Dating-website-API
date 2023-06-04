import {connect} from 'mongoose'

let dbUrl = process.env.DB ?? ""

const options = {
  autoIndex: false, // Don't build indexes
  maxPoolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4 // Use IPv4, skip trying IPv6
};

export const dbConnection = async() => {
    try {
     
       const db =  await connect(dbUrl, options)
        console.log('database connection succes', db)  
    } catch (error) {
      console.log(error)  
    }

   
}


