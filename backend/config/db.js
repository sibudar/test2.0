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
<<<<<<< HEAD
    console.log("Connection to database failed.", err);
=======
    console.log("connection to MySql failed", err);
>>>>>>> 9d7de7dfc5e104ef1fbd037645a1c1c00b421b24
  } else {
    console.log("Connected to database successfully.");
  }
});
connect.query = util.promisify(connect.query).bind(connect);
module.exports = connect;
