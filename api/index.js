const express = require("express")
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const authRoute = require('./routes/auth')

dotenv.config()
app.use(express.json())

mongoose
    .connect(process.env.Mongo_URL)
    .then(console.log('connected to mongo'))
    .catch((err) => console.log(err))

app.use('/api/auth', authRoute);

app.listen('5000', () => {
    console.log('Backend is running')
})