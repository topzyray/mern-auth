import User from '../models/userModel.js'
import bcrypt from 'bcryptjs'
import { errorHandler } from '../utils/error.js'
import jwt from 'jsonwebtoken'

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

export const signin = async (req, res, next) => {
    const { email, password } = req.body
    try {    
        const validUser = await User.findOne({ email })
        if (!validUser) return next(errorHandler(401, 'User not found'))
        const validPassword = bcrypt.compareSync(password, validUser.password)
        if (!validPassword) return next(errorHandler(401, 'Wrong credentials'))

        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET)
        const { password: hashedPassword, ...rest } = validUser._doc
        const expiryDate = new Date(Date.now() + 3600000) // 1 hour
        res
            .cookie('access_token', token, { httpOnly: true, expires: expiryDate })
            .status(200)
            .json({
                success: true,
                data: {
                    validUser: rest
            }
        })
    } catch (error) {
        next(error)
    }
}