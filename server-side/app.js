import express from 'express'
import userRoutes from './routes/userRoute.js'
import authRoutes from './routes/authRoute.js'

const app = express()

app.use(express.json())

app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal Server Error'
    return res.status(statusCode).json({
        success: false,
        error: message,
        statusCode
    })
})

export default app