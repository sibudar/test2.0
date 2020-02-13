 const mysql = require('mysql');
 const util = require('util')

require('dotenv').config();
//create connection
const connect = mysql.createConnection({
    host:'localhost',
    user: 'root',
    //remove db after
    database: 'registered',
    password: ''
    //password: 'novelty1234'
});

connect.connect((err) => {
    if(err){
        console.log( 'connection to MySql failed');
    }
    else{
        console.log('connected to MySql successfully')
    }
});
    connect.query=util.promisify(connect.query).bind(connect);
module.exports = connect;