
const mongoose = require('mongoose')
require('dotenv')

const connection = mongoose.connect('mongodb+srv://shivam:golmaal5@cluster0.10lgcrz.mongodb.net/Hospital')
// const connection = mongoose.connect(process.env.MONGO_URL)


module.exports = {connection}