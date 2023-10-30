

const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    name: {type: String},
    image: {type: String},
    specialization: {type: String},
    experience: {type: Number},
    location: {type: String},
    date: {type: String},
    slots: {type: String},
    fee: {type: Number},
    userId: String,
},{versionKey: false})

const PostModel = mongoose.model('post',postSchema)

module.exports = {PostModel}