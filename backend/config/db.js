const mysql = require("mysql");
const util = require("util");

require("dotenv").config();
// Create connection.
const connect = mysql.createConnection({
  host: "localhost",
  user: "ruty",
  database: "noveltydb",
  password: "",
  port: process.env.SQLPORT,
  socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
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
 