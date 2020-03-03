const ideaRoute = require('express').Router();
const ideaController = require('../Controllers/ideaController');



 
// [post] route to add a business to .
/**
 * @swagger
 * /ideas:
 *  post:
 *     tags:
 *      - user
 *     summary: Adds a business idea
 *     description: This can only be done by users who have accounts
 *     consumes:
 *        - application/json
 *     produces:
 *        - application/json
 *     parameters:
 *        - name: Business Idea
 *          description: Created business idea object
 *          in: body 
 *          schema: 
 *           type: object
 *           properties:
 *            busin_idea:         
 *              type: string
 *            id_user:         
 *              type: number
 *     responses:
 *        200:
 *         description: you have successfully added an idea.
 *        500:
 *         description: Oops! we\'re experiencing some problems on our servers, please try again later!.
 */
ideaRoute.post('/', async (req, res)=>{
    result = await ideaController.addIdea(req.body);

    res.status(result.status).send(result);

});

// get all ideas 




module.exports = ideaRoute;