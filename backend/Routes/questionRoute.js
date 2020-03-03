const userRouter = require("express").Router();
const questionController = require("../Controllers/questionController");

// [get] route to "/questions" to get a list of questions.
/**
 * @swagger
 * /users:
 *  get:
 *     tags:
 *      - user
 *     summary: Get questions
 *     description: retrieve questions from th db
 *     required: true
 *     consumes:
 *        - application/json
 *     produces:
 *        - application/json
 *     parameters:
 *        - name: user
 *          description: Questions retrieved
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
userRouter.get("/questions", async(req, res) => {
    result = await questionController.getQuestions();
<<<<<<< HEAD
=======
  
>>>>>>> 5ecf56b1345deb91de756661e21354bfa5bcfdba
    res.status(result.status).send(result);
  });

  module.exports = userRouter;