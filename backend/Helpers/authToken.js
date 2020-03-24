const jwt = require('jsonwebtoken');
require("dotenv").config();


const textKey = process.env.Textkey
/**
 * Creates a token.
 * @param {*} data
 * @returns a token.
 */
function generateToken(data) {
  //create a token
  const token = jwt.sign(data, textKey, {
    algorithm: 'HS256',
    expiresIn: 800000, //expires in 2 minutes
  });
  return token;
}

/**
 * Verifies a token.
 * @param {*} token
 * @returns decrypted token. 
 */
async function verifyToken(token) {
  if(!token) {
    return 'No token provided.';
  }
  // verify token
  return jwt.verify(token, textKey, (err, data) => {
    if(err) { return 'Invalid token.';} else { return data;}
  });
}

module.exports = { generateToken, verifyToken };