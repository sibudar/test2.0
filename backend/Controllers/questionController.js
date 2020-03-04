const fieldResponse = require ('../Helpers/httpResponse');
const queryResponse = require ('../Helpers/queryFunction');

/**
 * Gets questions from DB.
 * @returns the data stored in the question table.
 */ 
async function getQuestions(){
    
    const sql = "CALL getQuestions()";

    return queryResponse(sql, '').then((result) => {
        return fieldResponse(200, 'Here are your questions.', result[0]);
    }).catch(error => {
        return fieldResponse(400, 'Could not get questions requested.', error.sqlMessage);
    })
}

module.exports = {getQuestions};