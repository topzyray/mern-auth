import User from '../models/userModel.js'
import bcrypt from 'bcryptjs'

export const signup = async (req, res) => {
    const { username, email, password } = req.body
    const hashedPassword = bcrypt.hashSync(password, 10)
    try {    
        await User.create({ username, email, password: hashedPassword })
        res.status(201).json({
            status: 'success',
            data: {
                message: 'User created successfully.'
            }
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err.message
        })
    }
}