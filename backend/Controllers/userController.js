const conn = require("../config/db");
const fieldValidator = require("../Helpers/validate");
const fieldResponse = require("../Helpers/httpResponse");
const queryResponse = require("../Helpers/queryFunction");
const bcrypt = require("bcryptjs");

async function register(data) {
  if (fieldValidator.validate(data.first_name)) {
    return fieldResponse(400, "First name required");
  }
  if (fieldValidator.validate(data.last_name)) {
    return fieldResponse(400, "Last name required");
  }
  if (fieldValidator.validate(data.email)) {
    return fieldResponse(400, "Email is required");
  }

  if (fieldValidator.validate(data.user_password)) {

    return fieldResponse(400, "Password is required");
  }

  let sql = `INSERT INTO USERS SET ?`;
  data.user_password = bcrypt.hashSync(data.user_password, 10); //password is hashed

  return queryResponse(sql, data)
    .then(result => {
      
      return fieldResponse(201, "successfully created.");
    })
    .catch(error => {
      return fieldResponse(400, "unsuccessful", error.sqlMessage);
    });
}

async function login(data) {
  if (fieldValidator.validate(data.email)) {
    return fieldResponse(400, "Emaill is required");
  }
  if (fieldValidator.validate(data.user_password)) {
    return fieldResponse(400, "Password is required");
  }

  const sql = "SELECT * FROM users WHERE email = ?";
  let password = bcrypt.hashSync(data.user_password, 10); //password is hashed

  return queryResponse(sql, data.email)
    .then(result => {
      console.log;
      if (bcrypt.compareSync(result[0].user_password, password)) {
        return fieldResponse(200, "logged in.", result);
      } else {
        return fieldResponse(401, "password does not match.");
      }
    })
    .catch(error => {
      return fieldResponse(404, "unable to login", error.sqlMessage);
    });
}
module.exports = { register, login };
