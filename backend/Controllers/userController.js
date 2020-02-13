const conn = require("../config/db");
const fieldValidator = require("../Helpers/validate");
const fieldResponse = require("../Helpers/httpResponse");
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

  try {
    let result = conn.query(sql, [data]);
    return fieldResponse(201, "successful", result);
  } catch (error) {
    return fieldResponse(400, "unsuccesful", error);
  }
}

async function login(data) {

    if(fieldValidator.validate(data.email)){
        return fieldResponse(400, 'Emaill is required');
    }
    if(fieldValidator.validate(data.user_password)){
        return fieldResponse(400, 'Password is required');
    }

    try {
        const userData = {
            email: data.email,
            user_password: bcrypt.hashSync(data.user_password, 10)
        }
        const sql  = 'SELECT `email` FROM `users` WHERE `email` = ?';
        let result = conn.query(sql, [data], rows);
        if(rows.length > 0){
            if(bcrypt.compareSync(user_password,rows[0].user_password)){

            }else{

            }
        }

    } catch (error) {
        
    }
}
module.exports = { register, login };
