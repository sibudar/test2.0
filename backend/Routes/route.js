const User = require('express').Router()

User.get('/users', (req, res)=>{
  res.send('works again')
})

module.exports = User