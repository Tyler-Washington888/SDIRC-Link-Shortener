const mongoose = require('mongoose') 
const db = process.env.MONGO_URI
const colors  = require('colors')

// connects application to MongoDB in cloud 
const connectDB = async () => {
    try{
        await mongoose.connect(db);

        console.log('MongoDB Connected'.yellow.underline)
    }
    catch (error) {
        console.log(error)
        process.exit(1)
    }
}


module.exports = connectDB