const userRouter = require("express").Router();
const registerController = require("../Controllers/userController");

userRouter.post("/register", async (req, res) => {
  result = await registerController.register(req.body);

  res.status(result.status).send(result);
});

userRouter.post("/login", async (req, res) => {
  let result = await registerController.login(req.body);

  res.status(result.status).send(result);
});

userRouter.post("/forgot-password", async(req, res) => {
  let result = await registerController.forgot(req.body);

  res.status(result.status).send(result);
});

userRouter.post("/reset-password", async(req, res) => {
  let result = await registerController.reset(req.body);

  res.status(result.status).send(result);
});

module.exports = userRouter;
