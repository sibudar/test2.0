<<<<<<< HEAD
/**
 * A response.
 * @param {*} status 
 * @param {*} message 
 * @param {*} data
 * @returns status, message, data. 
 */
function response(status, message, data=[])
{
    return { status, message, data}
=======

function response(status, message, data=[])
{
    return {status, message, data}
>>>>>>> 9d7de7dfc5e104ef1fbd037645a1c1c00b421b24
}

module.exports = response;