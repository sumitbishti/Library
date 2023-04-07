if (process.env.NODE_ENV !== 'production') {
require('dotenv').config()
}
const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const indexRouter = require('./routes/index')
const mongoose = require('mongoose')
const connect = require('./db/db')

const app = express()

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

// mongoose.connect(process.env.MONGO_URI)
// const db = mongoose.connection
// db.on('error', err => console.log(err))
// db.once('open', () => console.log('Connected to mongoose...'))

connect(process.env.MONGO_URI)
app.use('/', indexRouter)

const port = process.env.PORT || 3000
app.listen(port, console.log('Server running at port 3000...'))