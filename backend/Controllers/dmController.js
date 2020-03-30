const { response, validate, domainavailability } = require('../Helpers');

/**
 * Gets content from DB.
 * @returns the data stored in the content table.
 */
async function checkDomain(data) {

    if (validate.validate(data)) {
        return response(400, "Domain is required.");
    }

    let results = await domainavailability(data)
    return response(200, 'Here is the content you requested.', results);
}

module.exports = { checkDomain }