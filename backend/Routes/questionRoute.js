const userRouter = require("express").Router();
const questionController = require("../Controllers/questionController");


userRouter.get("/questions", async(req, res) => {
    result = await questionController.getQuestions(req.body);
  
    res.status(result.status).send(result);
  });

  module.exports = userRouter;