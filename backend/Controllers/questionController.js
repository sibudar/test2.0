const fieldResponse = require ('../Helpers/httpResponse');
const queryResponse = require ('../Helpers/queryFunction');

function getQuestions(data){
    
    // SELECT * FROM questions
    const sql = "CALL getQuestions()";

    return queryResponse(sql, data).then((result) => {
        return fieldResponse(200, 'Here are your questions.', result[0]);
    }).catch(error => {
        return fieldResponse(200, 'Could not get questions requested.', error.sqlMessage);
    })
}

module.exports = {getQuestions};