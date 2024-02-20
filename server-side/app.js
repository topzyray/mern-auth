import express from 'express'
import userRoutes from './routes/userRoute.js'

const app = express()

app.use('/api/user', userRoutes)

export default app