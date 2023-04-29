const mongoose = require('mongoose')

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log(`db connected ${mongoose.connection.host}`)
    }catch(error){
        console.log(`db error ${error}`)
    }
}
module.exports = connectDB