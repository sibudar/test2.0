const mysql = require("mysql");
const util = require("util");

require("dotenv").config();
// Create connection.
const connect = mysql.createConnection({
  host:process.env.HOST,
  user: process.env.USER_ONE,
  database: process.env.DB,
  password: process.env.PASSWORD
});
// Connect to the database.
connect.connect(err => {
  if (err) {
    console.log("connection to MySql failed", err);
  } else {
    console.log("Connected to database successfully.");
  }
});
connect.query = util.promisify(connect.query).bind(connect);
module.exports = connect;
