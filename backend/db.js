const mysql = require('mysql');
require('dotenv').config();
//create connection
const connect = mysql.createConnection({
    host: process.env.db,
    user: 'root',
    password: 'novelty1234'
});

connect.connect((err) => {
    if(err){
        // console.log(err);
        console.log('connection to MySql failed');
    }
    else{
        console.log('connected to MySql successfully')
    }
});

module.exports = connect;