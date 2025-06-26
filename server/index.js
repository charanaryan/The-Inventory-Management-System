const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const connectDB = require('./config/db')
const productRoutes = require('./routes/productRoutes')


const server = express()

dotenv.config()

server.use(express.json())
server.use(cors()) // allows the request from frontend
server.use('/api',productRoutes)

connectDB()

const port = process.env.PORT

server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})