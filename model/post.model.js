

const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    name: {type: String, required: true},
    image: {type: String, required: true},
    specialization: {type: String, required: true},
    experience: {type: Number, required: true},
    location: {type: String, required: true},
    date: {type: String, required: true},
    slots: {type: String, required: true},
    fee: {type: Number, required: true},
    userId: String,
},{versionKey: false})

const PostModel = mongoose.model('post',postSchema)

module.exports = {PostModel}