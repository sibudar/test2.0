const express = require('express');
const app = express();
const user = require('./Routes/userRoute.js');
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

// default route 
app.use('/', (req, res, next) => {
    res.send('Gift: I thought it was suppose to be req');
});

module.exports = app;