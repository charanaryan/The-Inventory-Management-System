const mongoose = require('mongoose')

const connectDB = () => {
    const connection = mongoose.connect(process.env.MONGO_URI)
    console.log("Congratulations!! Your database is connected")
}

module.exports = connectDB