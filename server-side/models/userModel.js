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
        trim: true,
    },
    profilePicture: {
        type: String,
        default: "https://media.istockphoto.com/id/1223671392/vector/default-profile-picture-avatar-photo-placeholder-vector-illustration.jpg?s=612x612&w=0&k=20&c=s0aTdmT5aU6b8ot7VKm11DeID6NctRCpB755rA1BIP0=",
    }
}, {timestamps: true})

const User = new mongoose.model('User', userSchema)

export default User