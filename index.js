const bodyParser = require('body-parser')
const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')
const cors = require('cors')
const connectDB = require('./config/db')
const errorHandler = require('./middleware/errorMiddleware')


// routes path
const authRoutes = require('./routes/authRoutes.js')


// dotenv
dotenv.config()

// mongo db
connectDB()

// rest object
const app = express()

// middleware
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())
app.use(morgan('dev'))
app.use(errorHandler)

// port
const PORT = process.env.PORT || 8080;

// API routes
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/openai', require('./routes/openaiRoutes'))

// listen server
app.listen(PORT, () => {
    console.log('Server is running on 8080')
})