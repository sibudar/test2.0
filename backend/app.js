const express = require('express');
const app = express();
const idea = require('./Routes/ideaRoute');
const user = require('./Routes/userRoute');
const questions = require('./Routes/questionRoute');
const content = require('./Routes/contentRoute');
const cors = require('cors');
const  swaggerUi = require('swagger-ui-express');
swaggerDocument =  require('./swagger.js');

require('dotenv').config();

const bodyParser = require('body-parser');
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));//

app.use('/api/v1/users', user);
app.use('/api/v1/ideas', idea);
app.use('/api/v1/questions', questions);
app.use('/api/v1/content', content);

// default route 
app.use('/', (req, res, next) => {
    res.send('Gift: I thought it was suppose to be req');
});

module.exports = app;