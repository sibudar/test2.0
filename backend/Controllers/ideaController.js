const fieldValidator = require ('../Helpers/validate');
const fieldResponse = require ('../Helpers/httpResponse');
const queryResponse = require ('../Helpers/queryFunction');


/**
 * adds a business idea
 * @param {*} data 
 * data is a body the user inserts.
 * @returns a queryResponse.
 */

async function addIdea(data) {
    if(fieldValidator.validate(data.busin_idea)){
        return fieldResponse (400,"busin_idea is required");
    }
    // insert into business_idea set ?
    let sql = 'CALL businessIdea(?)'
    
    return queryResponse(sql, [data.busin_idea, data.id_user]).then(result => {
        return fieldResponse(201,'you have successfully added an idea');
    }).catch(error => {
        return fieldResponse(500, 'Oops! we\'re experiencing some problems on our servers, please try again later!', error.sqlMessage );
    });
}

module.exports = {addIdea};
