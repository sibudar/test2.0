const fieldValidator = require ('../Helpers/validate');
const fieldResponse = require ('../Helpers/httpResponse');
const queryResponse = require ('../Helpers/queryFunction');
const validator = require('validator');


/**
 * adds a business idea
 * @param {*} data   
 * data is a body the user inserts.
 * @returns a queryResponse.
 */
async function addIdea(data) {
    if(fieldValidator.validate(data.busin_idea)){
        return fieldResponse (400,"business idea is required");
    }
    if(fieldValidator.validate(data.descript)){
        return fieldResponse (400,"business description is required");
    }
    if(fieldValidator.validate(data.id_user)){
        return fieldResponse (400,"id_user is required");
    }

    let sql = 'CALL businessIdea(?)'
    
    return queryResponse(sql, [data.busin_idea, data.descript, data.id_user]).then(result => {
        return fieldResponse(201,'you have successfully added an idea');
    }).catch(error => {
        return fieldResponse(500, 'Oops! we\'re experiencing some problems on our servers, please try again later!', error.sqlMessage );
    });
}

/**
 * Execute a query using a stored procedure.
 * @param {*} data 
 * data is a params the user inserts.
 * @returns a queryResponse.
 */
async function listIdeas(data) {
    // checks if data.id is an interger
    if(!validator.isInt(data.id)){
        return fieldResponse (400," id : is not an integer " );
    }

    let sql = 'CALL getIdeas(?)';
    
    return queryResponse(sql, data.id).then(async result => {
        if(result[0][0].id === parseInt(data.id)) {
            return fieldResponse(201,'getting all your ideas.', result[0]);
        }
    }).catch(error => {
        return fieldResponse(400, 'ideas or user id do not exist.', error);
    });
}

/**
 * Execute a query using a stored procedure.
 * @param {*} data 
 * data is a params the user inserts.
 * @returns a queryResponse.
 */
async function deleteIdea(data) {
    if(fieldValidator.validate(data.b_id)){
        return fieldResponse (400,"business id is required");
    }

    if(fieldValidator.validate(data.u_id)){
        return fieldResponse (400,"user id is required");
    }

    let sql = 'CALL deleteIdea(?)';
    
    return queryResponse(sql, [data.b_id , data.u_id]).then(result => {
        return fieldResponse(201,'You have successfully deleted your idea');
    }).catch(error => {
        return fieldResponse(400, 'cannot get the ideas', error);
    });
}

module.exports = {addIdea, listIdeas, deleteIdea};