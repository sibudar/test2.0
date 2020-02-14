const express = require('express');
const app = express();
const user = require('./Routes/userRoute.js');

require('dotenv').config();

const bodyParser = require('body-parser');
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/api/v1/users', user);

app.use('/', (req, res, next) => {
    res.send('Gift: I thought it was suppose to be req');
});

module.exports = app