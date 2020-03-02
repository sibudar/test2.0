const ideaRoute = require('express').Router();
const ideaController = require('../Controllers/ideaController');


ideaRoute.post('/', async (req, res)=>{
    result = await ideaController.addIdea(req.body);

    res.status(result.status).send(result);

});

module.exports = ideaRoute;