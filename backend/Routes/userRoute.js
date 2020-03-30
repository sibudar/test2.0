const userRouter = require("express").Router();
const registerController = require("../Controllers/userController");
const verify = require('../Helpers/authToken');


// [post] route  to register a user.
/**
 * @swagger
 * /users:
 *  post:
 *     tags:
 *      - user
 *     summary: Creates User
 *     description: This can only be done by first time users
 *     consumes:
 *        - application/json
 *     produces:
 *        - application/json
 *     parameters:
 *        - name: user
 *          description: Created user object
 *          in: body 
 *          required: true
 *          schema: 
 *           $ref: '#/definitions/User'
 *     responses:
 *        201:
 *         description: Successfully created an account
 *        400:
 *         description: Unsuccessful
 * 
 */
userRouter.post("/", async(req, res) => {
  result = await registerController.register(req.body);
  
  res.status(result.status).send(result);
});
  
// [post] route to "/login" to login.
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
 *          required: true
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
userRouter.post("/login", async(req, res) => {
  let result = await registerController.login(req.body);

  res.status(result.status).send(result);
});

// [post] route to "/forgot-password" to forgot a password.
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
 *          required: true 
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
userRouter.post("/forgotPassword", async(req, res) => {
  let result = await registerController.forgot(req.body);

  res.status(result.status).send(result);
});

// [post] route to "/reset" to reset a password.
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
 *          required: true 
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
userRouter.post("/resetPassword", async (req, res) => {
  let result = await registerController.reset(req.body);

  res.status(result.status).send(result);
});

userRouter.get("/me", async (req, res) => {
  let token = await verify.verifyToken(req.headers["x-access-token"]);

  res.status(token.status).send(token);
})

module.exports = userRouter;