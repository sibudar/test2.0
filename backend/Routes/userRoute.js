const userRouter = require("express").Router();
const registerController = require("../Controllers/userController");

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