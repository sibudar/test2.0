const userRouter = require('express').Router();
const registerController = require('../Controllers/userController');
const bcrypt = require('bcryptjs');


userRouter.post('/', async (req, res)=>{
  const userData = {
    first_name :req.body.first_name,
    last_name :req.body.last_name,
    email :req.body.email,
    user_password:bcrypt.hashSync(req.body.user_password,10)
  }
  
  const results = await registerController.register(userData);
  res.status(results.status).send(results);
})

module.exports = userRouter