const express = require('express')
const app = express()
const User = require('./Routes/route.js')

app.use('/Api', User)

app.use('/', (req,res)=>{
    res.send('It works!')
})


module.exports = app