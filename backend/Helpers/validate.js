/**
 * the function validates if the field is null or undefined
 * @param {*} field  
 * 
 * return boolean
 */

function validate (field) {
  if (field == undefined) {
    return true;
  }
  return false;
}

module.exports = {validate};
