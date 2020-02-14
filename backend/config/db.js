 const mysql = require('mysql');
 const util = require('util')
 

require('dotenv').config();
//create connection
const connect = mysql.createConnection({
    host:process.env.host,
    user:process.env.user,
    database:process.env.database,
    password:process.env.password
    
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