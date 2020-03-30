const mysql = require("mysql");
const util = require("util");

require("dotenv").config();
// Create connection.
const connect = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER_ONE,
  database: process.env.DB,
  password: process.env.PASSWORD,
  port: process.env.SQLPORT,
  socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
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
