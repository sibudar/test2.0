const mysql = require("mysql");
const util = require("util");

require("dotenv").config();
// Create connection.
const connect = mysql.createConnection({
  
    host: '129.232.211.166',
    user: 'root',
    database: 'noveltydb',
    password: 'novelty1234',
    port: 5506


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
 