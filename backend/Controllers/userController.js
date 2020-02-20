const conn = require ('../config/db');
const fieldValidator = require ('../Helpers/validate');
const fieldResponse = require ('../Helpers/httpResponse');
const queryResponse = require('../Helpers/queryFunction');
const bcrypt = require('bcryptjs');
const mail = require('../Helpers/sendEmail');
const msg = require('../config/bodyMessage');
const encrypt = require('../Helpers/authToken')

async function register (data) {
  if (fieldValidator.validate (data.first_name)) {
    return fieldResponse (400, 'First name required');
  }
  if (fieldValidator.validate (data.last_name)) {
    return fieldResponse (400, 'Last name required');
  }
  if (fieldValidator.validate (data.email)) {
    return fieldResponse (400, 'Email is required');
  }

  if (fieldValidator.validate (data.user_password)) {
    return fieldResponse (400, 'Password is required');
  }

  let sql = `INSERT INTO USERS SET ?`;
  data.user_password = bcrypt.hashSync (data.user_password, 10); //password is hashed

  return queryResponse (sql, data)
    .then (result => {
      return fieldResponse (201, 'successfully created.');
    })
    .catch (error => {
      return fieldResponse (400, 'unsuccessful', error.sqlMessage);
    });
}

async function login (data) {
  if (fieldValidator.validate (data.email)) {
    return fieldResponse (400, 'Emaill is required');
  }
  if (fieldValidator.validate (data.user_password)) {
    return fieldResponse (400, 'Password is required');
  }

  const sql = 'SELECT * FROM users WHERE email = ?';
  let password = bcrypt.hashSync (data.user_password, 10); //password is hashed

  return queryResponse (sql, data.email)
    .then (result => {
      console.log;
      if (bcrypt.compareSync (result[0].user_password, password)) {
        return fieldResponse (200, 'logged in.', result);
      } else {
        return fieldResponse (401, 'password does not match.');
      }
    })
    .catch (error => {
      return fieldResponse (404, 'unable to login', error.sqlMessage);
    });
}

async function forgot(data) {
  if (fieldValidator.validate (data.email)) {
    return fieldResponse (400, 'Emaill is required');
  }
  const sql = 'SELECT first_name, email FROM users WHERE email = ?';

  return queryResponse (sql, data.email).then (result => {
    console.log(result[0].email, data.email)
      //check the length instead
      if(result[0].email === data.email) {
        let token = encrypt.generateToken({email:data.email});
        let link = process.env.LINK || 'http://localhost:4200/reset-password/' + token;

        mail.sendEmail(data.email, msg.resetMessage(result[0].first_name, link));
        return fieldResponse (200, "Thank you! Please check your email we've sent you an email");
      }
    }).catch (error => {
      return fieldResponse (400,'user email does not exist, try again!', error.sqlMessage);
    });
}

async function reset(data) {
  
}

module.exports = {register, login, forgot, reset};
