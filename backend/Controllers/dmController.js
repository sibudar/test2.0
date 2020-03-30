const { response, validate, checkDomainAvailability } = require('../Helpers');

/**
 * Gets content from DB.
 * @returns the data stored in the content table.
 */
async function checkDomain(data) {

    if (validate.validate(data.domain)) {
        return response(400, "Domain is required.");
    }
    
    let results = await checkDomainAvailability(data.domain)
    return response(200, results.domainavailability);
}

module.exports = { checkDomain }