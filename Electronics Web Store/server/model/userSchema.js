import mongoose from 'mongoose'

const userScehma = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true,
        min: 5,
        max: 20
    },

    lastname: {
        type: String,
        required: true,
        trim: true,
        min: 5,
        max: 20
    },

    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
        lowerCase: true
    },

    email: {
        type: String,
        required: true,
        trim: true,
        uniqure: true,
        lowercase: true
    
    },

    password: {
        type: String,
        required: true
    
    }


})

const user = mongoose.model('user', userScehma)

export default user