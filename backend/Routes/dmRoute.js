const dmRouter = require("express").Router();
const dmController = require("../Controllers/dmController");

dmRouter.post('/', async (req, res) => {
    let result = await dmController.domainAvailability(req.body)
    res.status(result.status).send(result);
});

module.exports = dmRouter;