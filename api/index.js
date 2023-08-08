const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(require('./routes/index.routes'))
app.use(express.static('public'))

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.get('/', (req, res) => {
  res.json({ message: 'Hello world' })
})

app.listen('1337')