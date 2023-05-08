import express from 'express'
import mongoose from 'mongoose'
import ENV from './config/env.config.js'
import { logError, logInfo, logSuccess } from './utils/console.utils.js'
import appRouter from './routers/app.routers.js'
import errorHandler from './middleware/error.middleware.js'

const app = express()

//Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', appRouter)
app.use(errorHandler)

//Routes
app.get('/', (req, res) => {
    res.send('Welcome to the API-REST')
})

//Listen
mongoose.connect(ENV.MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB')
        logInfo('connected to MongoDB successfully')
        const server = app.listen(ENV.PORT, () => {
            const serverUri = `http://localhost:${ENV.PORT}`
            logSuccess(`Server running on ${serverUri}`)
        })

        server.on('error', (err) => {
            const serverUri = `http://localhost:${ENV.PORT}`
            logError(`There was an error trying to run the server on ${serverUri}`)
            throw err
        })
    })
    .catch((err) => {
        logError(`There was an error trying to connect to ${ENV.MONGO_URI} URI`)
        throw err
    })