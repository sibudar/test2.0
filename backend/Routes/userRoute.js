const userRouter = require("express").Router();
const registerController = require("../Controllers/userController");

/**
 * @swagger
 * /users:
 *  post:
 *     tags:
 *      - user
 *     description: Create new user in system
 *     consumes:
 *        - application/json
 *     produces:
 *        - application/json
 *     parameters:
 *        - name: user
 *          description: User that we want to create
 *          in: body 
 *          schema: 
 *           $ref: '#/definitions/register'
 *     responses:
 *        201:
 *         description: Successfully created an account
 *        400:
 *         description:Unsuccessful
 * 
 */


 /**
 * @swagger
 * /users/login:
 *  post:
 *     tags:
 *      - user
 *     description: Create new user in system
 *     produces:
 *        - application/json
 *     parameters:
 *        - name: user
 *          description: User that we want to create
 *          in: body 
 *          schema: 
 *           $ref: '#/definitions/login'
 *     responses:
 *        200:
 *         description: logged in
 *        401:
 *         description: password does not match
 *        404:
 *         description: unable to login
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