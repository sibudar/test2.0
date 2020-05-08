const mysql = require("mysql");
const util = require("util");

require("dotenv").config();
// Create connection.
const connect = mysql.createConnection({
  
    host: 'localhost',
    user: 'root',
<<<<<<< HEAD
    database: 'noveltydb'
    // password: 'novelty1234',
    // port: 5506
=======
    database: 'noveltydb',
    password: ''
   
  

>>>>>>> 760a09529ee692d6da6836aa54d65d7b5ec2d499
});
// Connect to the database.
connect.connect(err => {
  if(err) {
    console.log("Connection to database failed.", err);
  } else {
    console.log("Connected to database successfully.");
  }
});
connect.query = util.promisify(connect.query).bind(connect);
module.exports = connect;
 