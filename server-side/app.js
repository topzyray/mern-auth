import express from 'express'
import userRoutes from './routes/userRoute.js'
import authRoutes from './routes/authRoute.js'

const app = express()

app.use(express.json())

app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)

export default app