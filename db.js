
const mongoose = require('mongoose')
require('dotenv')

const connection = mongoose.connect(process.env.MONGO_URL)


module.exports = {connection}