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
 *            business idea:         
 *              type: string
 *            description:         
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
 
// [get] route to get  business ideas .
/**
 * @swagger
 * /ideas/{id}:
 *  get:
 *     tags:
 *      - user
 *     summary: Gets business ideas by id
 *     description: This can only be done users who have ideas
 *     id: getUserById
 *     consumes:
 *        - application/json
 *     produces:
 *        - application/json
 *     parameters:
 *        - name: id
 *          description: Gets the business idea by user id
 *          in: path
 *          schema: 
 *           type: object
 *           properties:
 *            id:         
 *              type: number
 *          
 *     responses:
 *        201:
 *         description: getting all your ideas.
 *        400:
 *         description: cannot get the ideas.
 */
ideaRoute.get('/:id',async(req, res)=>{
    result =  await ideaController.listIdeas(req.params);

    res.status(result.status).send(result);
});

module.exports = ideaRoute;