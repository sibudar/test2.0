<<<<<<< HEAD
const fieldValidator = require ('../Helpers/validate');
const fieldResponse = require ('../Helpers/httpResponse');
const queryResponse = require ('../Helpers/queryFunction');
const bcrypt = require ('bcryptjs');
const mail = require ('../Helpers/sendEmail');
const msg = require ('../config/bodyMessage');
const encrypt = require ('../Helpers/authToken');
const validator = require ('validator'); //import validator.js
=======
const fieldValidator = require('../Helpers/validate');
const fieldResponse = require('../Helpers/httpResponse');
const queryResponse = require('../Helpers/queryFunction');
const bcrypt = require('bcryptjs');
const mail = require('../Helpers/sendEmail');
const msg = require('../config/bodyMessage');
const encrypt = require('../Helpers/authToken');
const validator = require('validator');
>>>>>>> cf74005741c1c3121f58ee3e89d88bc37ce49ac1

/**
 * It register a user.
 * @param {*} data 
 * data is a body the user inserts.
 * @returns a queryResponse.
 */
async function register (data) {
  if (fieldValidator.validate (data.first_name)) {
    return fieldResponse (400, 'First name required');
  }
  if (fieldValidator.validate (data.last_name)) {
    return fieldResponse (400, 'Last name required');
  }
  if (fieldValidator.validate (data.user_password)) {
    return fieldResponse (400, 'Password is required');
  }
  //check if the string is an email.
  if (!validator.isEmail (data.email)) {
    return fieldResponse (400, 'Please enter a valid email adress');
  }

  let sql = `INSERT INTO users SET ?`;
  data.user_password = bcrypt.hashSync (data.user_password, 10); //password is hashed

  return queryResponse (sql, data)
    .then(result => {
      // <= should be an async function.
      // await mail.sendEmail(data.email, msg.registerMessage(result[0].first_name), msg.registerSubject());
      return fieldResponse (201, 'Successfully created an account.', result);
    })
    .catch (error => {
      //errno === 1062 is Duplicate entry 
      if(error.errno === 1062) {
        return fieldResponse (400, 'Email already exist, try a diffrent email adress or request forgot password on login page', error.sqlMessage)
      }
      //http status of 500 = internal server error
      return fieldResponse (500, 'Oops! we\'re experiencing some problems on our servers, please try again later!', error.sqlMessage );
    });
}

/**
 * Logging in.
 * @param {*} data
 * data is a body the user inserts.
 * @returns a queryResponse.
 */
async function login (data) {
  //check if the string is an email.
  if (!validator.isEmail (data.email)) {
    return fieldResponse (400, 'Please enter a valid email adress');
  }
  if (fieldValidator.validate (data.user_password)) {
    return fieldResponse (400, 'Password is required');
  }

  const sql = 'SELECT * FROM users WHERE email = ?';

<<<<<<< HEAD
  return queryResponse (sql, data.email)
    .then (async result => {

      const checkPassword = await bcrypt.compareSync (data.user_password,result[0].user_password);

      if (checkPassword) {
        return fieldResponse (200, 'Logged in successfully.', result);
=======
  return queryResponse(sql, data.email).then( async (result) => {

    let checkPassword = await bcrypt.compare(data.user_password, result[0].user_password) ;
      if(checkPassword){
        return fieldResponse(200, 'logged in.', result);
>>>>>>> cf74005741c1c3121f58ee3e89d88bc37ce49ac1
      } else {
        return fieldResponse (401, 'Incorrect password entered.');
      }
    })
    .catch (error => {
      return fieldResponse (404, 'Incorrect email adress entered.', error);
    });
}

/**
 * If the user forgot their password.
 * @param {*} data 
 * data is an email [body] the user inserts.
 * @returns a queryResponse.
 */
async function forgot (data) {
  //check if the string is an email.
  if (!validator.isEmail (data.email)) {
    return fieldResponse (400, 'Please enter a valid email adress');
  }

  const sql = 'SELECT first_name, email FROM users WHERE email = ?';

  return queryResponse (sql, data.email)
    .then (result => {
      //check the length instead
      if (result[0].email === data.email) {
        let token = encrypt.generateToken ({email: data.email});
        let link =
          process.env.LINK || 'http://localhost:4200/reset-password/' + token;

        mail.sendEmail (
          data.email,
          msg.resetMessage (result[0].first_name, link),
          msg.resetSubject ()
        );
        return fieldResponse (
          200,
          "Thank you! Please check your email we've sent you an email."
        );
      }
    })
    .catch (error => {
      return fieldResponse (
        400,
        'User email does not exist, try again!',
        error.sqlMessage
      );
    });
}

/**
 * If the user forgots the password.
 * User needs to reset their password.
 * @param {*} data 
 * @returns a queryResponse.
 */
async function reset (data) {
  let resetPass = await encrypt.verifyToken (data.token);
  let password = bcrypt.hashSync (data.user_password, 10); //password is hashed
  let sql = `UPDATE users SET user_password = ? WHERE email = '${resetPass.email}'`;

  return queryResponse (sql, password)
    .then (result => {
      return fieldResponse (200, 'Successfully updated.');
    })
    .catch (error => {
      return fieldResponse (400, 'Unsuccessful', error.sqlMessage);
    });
}

module.exports = {register, login, forgot, reset};
