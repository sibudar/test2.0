const conn = require('../config/db');
const fieldValidator = require('../Helpers/validate');
const fieldResponse = require('../Helpers/httpResponse');

async function register(data) {
  
    if (fieldValidator.validate(data.first_name)) {
        return fieldResponse(400,'First name required')
    }
    if (fieldValidator.validate(data.last_name)) {
        return fieldResponse(400,'Last name required')
    }
    if (fieldValidator.validate(data.email)) {
        return fieldResponse(400,'Email is required')
    }

    if (fieldValidator.validate(data.user_password)) {
        return fieldResponse(400,'Password is required')
    }

    let sql = `INSERT INTO USER SET ?`;
    
    try {
        let result = conn.query(sql,[data]); 
        return fieldResponse(201,"successful", result);
    } catch (error) {
        return fieldResponse(400,"unsuccesful",error)
    }
}
module.exports = {register} 