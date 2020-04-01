const mysql = require("mysql");
const util = require("util");

require("dotenv").config();
// Create connection.
const connect = mysql.createConnection({
  host:'localhost' || process.env.HOST,
  user:'root' || process.env.USER_ONE,
  database:'noveltydb' || process.env.DB,
  password:'' || process.env.PASSWORD

});
// Connect to the database.
connect.connect(err => {
  if(err) {
   // console.log("Connection to database failed.", err);
  } else {
   // console.log("Connected to database successfully.");
  }
});
connect.query = util.promisify(connect.query).bind(connect);
module.exports = connect;
