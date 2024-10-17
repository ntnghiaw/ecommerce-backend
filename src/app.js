const express = require('express')
const morgan = require('morgan')
const app = express()

// init middlewares
app.use(morgan('dev'))

// init db

// init routes

// handle errors

module.exports = app
