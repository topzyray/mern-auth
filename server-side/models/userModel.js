import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username field is required'],
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email field is required'],
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, 'Password field is required'],
        trim: true
    },
}, {timestamps: true})

const User = new mongoose.model('User', userSchema)

export default User