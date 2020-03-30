const userRouter = require("express").Router();
const dmController = require("../Controllers/dmController");


userRouter.post("/domain", async (req, res) => {
    let result = await dmController.checkDomain(req.body)
    res.status(result.status).send(result);
});
