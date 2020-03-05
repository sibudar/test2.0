const fieldResponse = require ('../Helpers/httpResponse');
const queryResponse = require ('../Helpers/queryFunction');
const fieldValidator = require ('../Helpers/validate');

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

/**
 * stores answers
 * @param {*} data   
 * data is a body the user inserts.
 * @returns a queryResponse.
 */
async function addAnswer(data) {
   
    if(fieldValidator.validate(data.user_answer)){
        return fieldResponse(400,"An answer to question is required", data);
    }
    if(fieldValidator.validate(data.id_user)){
        return fieldResponse(400,"user id is required");
    }
    if(fieldValidator.validate(data.id_bus)){
        return fieldResponse (400,"business id is required");
    }

    if(fieldValidator.validate(data.id_que)){
        return fieldResponse (400," question id  is required");
    }

    let sql = 'CALL postAnswers(?)'
    
    return queryResponse(sql, [data.user_answer, data.id_user,data.id_que, data.id_bus, ]).then((result) => {
        return fieldResponse(201,'Thank you for answering');
    }).catch(error => {
        return fieldResponse(500, 'Oops! we\'re experiencing some problems on our servers, please try again later!', error.sqlMessage );
    });
}

/**
 * stores answers
 * @param {*} data   
 * data is a body the user inserts.
 * @returns a queryResponse.
 */
async function modifyAnswer(data) {
   
    if(fieldValidator.validate(data.answer_user)){
        return fieldResponse(400,"A modified answer is required", data);
    }
    if(fieldValidator.validate(data.b_id)){
        return fieldResponse(400,"business id is required");
    }
    if(fieldValidator.validate(data.u_id)){
        return fieldResponse (400,"user id is required");
    }

    let sql = 'CALL updateAnswer(?)'
    
    return queryResponse(sql, [data.answer_user, data.b_id, data.u_id]).then((result) => {
        return fieldResponse(201,'Thank you for updating your answer');
    }).catch(error => {
        return fieldResponse(500, 'Oops! we\'re experiencing some problems on our servers, please try again later!', error.sqlMessage );
    });
}

module.exports = { getQuestions, addAnswer , modifyAnswer };