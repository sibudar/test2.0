const userRouter = require("express").Router();
const userController = require("../Controllers/userController");


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
  result = await userController.register(req.body);
  
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
  let result = await userController.login(req.body);

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
  let result = await userController.forgot(req.body);

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
  let result = await userController.reset(req.body);

  res.status(result.status).send(result);
});

// [get] route to "/me" to get a user.
/**
 * @swagger
 * /users/me:
 *  get:
 *     tags:
 *      - user
 *     summary:  me
 *     description: This can only be done by users who recieved an email to reset password
 *     consumes:
 *        - application/json
 *     produces:
 *        - application/json
 *     parameters:
 *        - name: user
 *          description: Created user object
 *          in: headers
 *          required: true 
 *          schema: 
 *           type: object
 *           properties:
 *            token:         
 *              type: string
 *            
 *     responses:
 *        200:
 *         description: Signature verified, here is the payload data.
 *        500:
 *         description: Oops! we're experiencing some problems on our servers, please try again later!.
 *        400:
 *         description: Signature is invalid or token provided expired.
 *     
 */
userRouter.get("/me", async (req, res) => {
  let token = await userController.verify(req.headers["x-access-token"]);

  res.status(token.status).send(token);
})

// [post] route to "/start" to post a user's progress.
/**
 * @swagger
 * /users/track:
 *  post:
 *     tags:
 *      - user
 *     summary:  tracking a user's progress.
 *     description: This is an automated procedure that the application serve.
 *     consumes:
 *        - application/json
 *     produces:
 *        - application/json
 *     parameters:
 *        - name: id
 *          description: Gets the user by an id.
 *          in: body
 *          required: true 
 *          schema: 
 *           type: object
 *           properties:
 *            user_id:         
 *              type: integer
 *            link:
 *              type: string
 *     responses:
 *        200:
 *         description: Successfully updated.
 *        401:
 *         description: Unsuccessful.
 */
userRouter.post("/start", async (req, res) => {
  let result = await userController.start(req.body);

  res.status(result.status).send(result);
});

// [post] route to "/track" to update a user's progress.
/**
 * @swagger
 * /users/track:
 *  post:
 *     tags:
 *      - user
 *     summary:  tracking a user's progress.
 *     description: This is an automated procedure that the application serve.
 *     consumes:
 *        - application/json
 *     produces:
 *        - application/json
 *     parameters:
 *        - name: id
 *          description: Gets the user by an id.
 *          in: body
 *          required: true 
 *          schema: 
 *           type: object
 *           properties:
 *            user_id:         
 *              type: integer
 *            link:
 *              type: string
 *     responses:
 *        200:
 *         description: Successfully updated.
 *        401:
 *         description: Unsuccessful.
 */
userRouter.post("/track", async (req, res) => {
  let result = await userController.tracking(req.body);

  res.status(result.status).send(result);
});

// [post] route to "/notnew" to update a user's status.
/**
 * @swagger
 * /users/notnew:
 *  post:
 *     tags:
 *      - user
 *     summary:  updates user's status.
 *     description: This is updates the user's status of being a new user.
 *     consumes:
 *        - application/json
 *     produces:
 *        - application/json
 *     parameters:
 *        - name: id
 *          description: Gets the user by an id.
 *          in: body
 *          required: true 
 *          schema: 
 *           type: object
 *           properties:
 *            user_id:         
 *              type: integer
 *     responses:
 *        200:
 *         description: Successfully updated.
 *        401:
 *         description: Unsuccessful.
 */
userRouter.post("/notnew", async (req, res) => {
  let result = await userController.notNew(req.body);

  res.status(result.status).send(result);
});

// [get] route to "/link" to get user's link.
/**
 * @swagger
 * /users/link:
 *  get:
 *     tags:
 *      - user
 *     summary: Checks the link that the user have.
 *     description: This gets the user's link.
 *     consumes:
 *        - application/json
 *     produces:
 *        - application/json
 *     parameters:
 *        - name: id
 *          description: Gets the user's link by an id.
 *          in: body
 *          required: true 
 *          schema: 
 *           type: object
 *           properties:
 *            user_id:         
 *              type: integer
 *     responses:
 *        200:
 *         description: Successfully have a link to the user.
 *        401:
 *         description: Unsuccessful, could not get any links..
 */
userRouter.get("/link/:id", async (req, res) => {
  let result = await userController.getLink(req.params);

  res.status(result.status).send(result);
});

module.exports = userRouter;