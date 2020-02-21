<<<<<<< HEAD
const fieldValidator = require ('../Helpers/validate');
const fieldResponse = require ('../Helpers/httpResponse');
=======
const fieldValidator = require('../Helpers/validate');
const fieldResponse = require('../Helpers/httpResponse');
>>>>>>> 9d7de7dfc5e104ef1fbd037645a1c1c00b421b24
const queryResponse = require('../Helpers/queryFunction');
const bcrypt = require('bcryptjs');
const mail = require('../Helpers/sendEmail');
const msg = require('../config/bodyMessage');
const encrypt = require('../Helpers/authToken');

/**
 * It register a user.
 * @param {*} data 
 * data is a body the user inserts.
 * @returns a queryResponse.
 */
async function register(data) {
  if(fieldValidator.validate(data.first_name)) {
    return fieldResponse(400, 'First name required');
  }
  if(fieldValidator.validate(data.last_name)) {
    return fieldResponse(400, 'Last name required');
  }
  if(fieldValidator.validate(data.email)) {
    return fieldResponse(400, 'Email is required');
  }
  if(fieldValidator.validate(data.user_password)) {
    return fieldResponse(400, 'Password is required');
  }

  let sql = `INSERT INTO USERS SET ?`;
  data.user_password = bcrypt.hashSync(data.user_password, 10); //password is hashed

  return queryResponse(sql, data).then((result) => { // <= should be an async function.
    // await mail.sendEmail(data.email, msg.registerMessage(result[0].first_name), msg.registerSubject());
    return fieldResponse(201, 'Successfully created an account.');
  }).catch(error => {
    return fieldResponse(400, 'Unsuccessful', error.sqlMessage);
  });
}

/**
 * Logging in.
 * @param {*} data
 * data is a body the user inserts.
 * @returns a queryResponse.
 */
async function login(data) {
  if(fieldValidator.validate(data.email)) {
    return fieldResponse(400, 'Emaill is required');
  }
  if(fieldValidator.validate(data.user_password)) {
    return fieldResponse(400, 'Password is required');
  }

  const sql = 'SELECT * FROM users WHERE email = ?';

  return queryResponse(sql, data.email).then(result => {
<<<<<<< HEAD
    if(bcrypt.compareSync(result[0].user_password, password)) {
      return fieldResponse(200, 'logged in.', result);
    } else {
      return fieldResponse(401, 'password does not match.');
    }
  }).catch(error => {
      return fieldResponse(404, 'unable to login', error.sqlMessage);
=======
      if(bcrypt.compare(data.user_password, result[0].user_password)){
        return fieldResponse(200, 'logged in.', result);
      } else {
        return fieldResponse(401, 'password does not match.');
      }
    }).catch(error => {
      return fieldResponse (404, 'unable to login', error.sqlMessage);
>>>>>>> 9d7de7dfc5e104ef1fbd037645a1c1c00b421b24
    });
}

/**
 * If the user forgot their password.
 * @param {*} data 
 * data is an email [body] the user inserts.
 * @returns a queryResponse.
 */
async function forgot(data) {
  if(fieldValidator.validate(data.email)) {
    return fieldResponse(400, 'Emaill is required');
  }
  
  const sql = 'SELECT first_name, email FROM users WHERE email = ?';

  return queryResponse(sql, data.email).then(result => {
    //check the length instead
    if(result[0].email === data.email) {
      let token = encrypt.generateToken({email: data.email});
      let link = process.env.LINK || 'http://localhost:4200/reset-password/' + token;
<<<<<<< HEAD
      // sending an email to the user. 
      mail.sendEmail(data.email, msg.resetMessage(result[0].first_name, link));
      return fieldResponse(200, "Thank you! Please check your email we've sent you an email");
=======

      mail.sendEmail(data.email, msg.resetMessage(result[0].first_name, link), msg.resetSubject());
      return fieldResponse (200, "Thank you! Please check your email we've sent you an email.");
>>>>>>> 9d7de7dfc5e104ef1fbd037645a1c1c00b421b24
    }
  }).catch(error => {
    return fieldResponse(400, 'User email does not exist, try again!', error.sqlMessage);
  });
}

/**
 * If the user forgots the password.
 * User needs to reset their password.
 * @param {*} data 
 * @returns a queryResponse.
 */
async function reset(data) {
  let resetPass = await encrypt.verifyToken(data.token);
  let password = bcrypt.hashSync(data.user_password, 10); //password is hashed
<<<<<<< HEAD
=======

>>>>>>> 9d7de7dfc5e104ef1fbd037645a1c1c00b421b24
  let sql = `UPDATE Users SET user_password = ? WHERE email = '${resetPass.email}'`;

  return queryResponse(sql, password).then(result => {
<<<<<<< HEAD
    return fieldResponse(200, 'successfully updated.');
  }).catch(error => {
    return fieldResponse(400, 'unsuccessful', error.sqlMessage);
=======
    return fieldResponse(200, 'Successfully updated.');
  }).catch(error => {
    return fieldResponse(400, 'Unsuccessful', error.sqlMessage);
>>>>>>> 9d7de7dfc5e104ef1fbd037645a1c1c00b421b24
  });
}

module.exports = { register, login, forgot, reset };