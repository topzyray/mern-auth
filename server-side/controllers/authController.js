import User from '../models/userModel.js'
import bcrypt from 'bcryptjs'

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body
    try {    
        const hashedPassword = bcrypt.hashSync(password, 10)
        await User.create({ username, email, password: hashedPassword })
        res.status(201).json({
            status: true,
            data: {
                message: 'User created successfully.'
            }
        })
    } catch (error) {
        next(error)
    }
}