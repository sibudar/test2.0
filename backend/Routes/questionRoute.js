const userRouter = require("express").Router();
const questionController = require("../Controllers/questionController");

// [get] route to "/questions" to get a list of questions.
/**
 * @swagger
 * /questions:
 *  get:  
 *     tags:
 *      - user
 *     summary: Get questions
 *     description: retrieve questions from th db
 *     consumes:
 *        - application/json
 *     produces:
 *        - application/json     
 *     responses:
 *        200:
 *         description: Here are your questions.
 *        400:
 *         description: Could not get questions requested.
 * 
 */
userRouter.get("/questions", async(req, res) => {
    result = await questionController.getQuestions();
  
    res.status(result.status).send(result);
  });

  module.exports = userRouter;