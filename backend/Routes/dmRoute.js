const dmRouter = require("express").Router();
const dmController = require("../Controllers/dmController");

dmRouter.post('/', async (req, res) => {
    console.log('i can hit the domain route');
    let result = await dmController.checkDomain(req.body);
    res.status(result.status).send(result);
});

module.exports = dmRouter;