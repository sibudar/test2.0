const userRouter = require("express").Router();
const registerController = require("../Controllers/userController");

// registers user 

/**
 * @swagger
 * /users:
 *  post:
 *     tags:
 *      - user
 *     summary: Create User
 *     description: This can only be done by first time users
 *     consumes:
 *        - application/json
 *     produces:
 *        - application/json
 *     parameters:
 *        - name: user
 *          description: Created user object
 *          in: body 
 *          schema: 
 *           $ref: '#/definitions/User'
 *     responses:
 *        201:
 *         description: Successfully created an account
 *        400:
 *         description: Unsuccessful
 * 
 */

// logins in user

 /**
 * @swagger
 * /users/login:
 *  post:
 *     tags:
 *      - user
 *     summary: Logs user into the system
 *     description: This can only be done by users who have registered
 *     consumes:
 *        - application/json
 *     produces:
 *        - application/json
 *     parameters:
 *        - name: user
 *          description: Created user object
 *          in: body 
 *          schema: 
 *           type: object
 *           properties:
 *            email:         
 *              type: string
 *            user_password:         
 *              type: string
 *     responses:
 *        200:
 *         description: Logged in successfully.
 *        401:
 *         description: Incorrect password entered.
 *     400:
 *        description: Incorrect email adress entered.
 */


 // forgot-password

 /**
 * @swagger
 * /users/forgot-password:
 *  post:
 *     tags:
 *      - user
 *     summary: Sends an email to reset password
 *     description: This can only be done by users who have registered
 *     consumes:
 *        - application/json
 *     produces:
 *        - application/json
 *     parameters:
 *        - name: user
 *          description: Created user object
 *          in: body 
 *          schema: 
 *           type: object
 *           properties:
 *            first_name:         
 *              type: string
 *            email:         
 *              type: string
 *     responses:
 *        200:
 *         description: Thank you! Please check your email we've sent you an email.
 *        401:
 *         description: User email does not exist, try again!.
 *     
 */

 // reset password

 /**
 * @swagger
 * /users/reset:
 *  post:
 *     tags:
 *      - user
 *     summary:  resets password
 *     description: This can only be done by users who recieved an email to reset password
 *     consumes:
 *        - application/json
 *     produces:
 *        - application/json
 *     parameters:
 *        - name: user
 *          description: Created user object
 *          in: body 
 *          schema: 
 *           type: object
 *           properties:
 *            user_password:         
 *              type: string
 *            
 *     responses:
 *        200:
 *         description: Successfully updated.
 *        401:
 *         description: Unsuccessful.
 *     
 */


// [post] route to "/register" to register a user.
userRouter.post("/", async(req, res) => {
  result = await registerController.register(req.body);

  res.status(result.status).send(result);
});
// [post] route to "/login" to login.
userRouter.post("/login", async(req, res) => {
  let result = await registerController.login(req.body);

  res.status(result.status).send(result);
});
// [post] route to "/forgot-password" to forgot a password.
userRouter.post("/forgot-password", async(req, res) => {
  let result = await registerController.forgot(req.body);

  res.status(result.status).send(result);
});
// [post] route to "/reset" to reset a password.
userRouter.post("/reset", async(req, res) => {
  let result = await registerController.reset(req.body);

  res.status(result.status).send(result);
});

module.exports = userRouter;