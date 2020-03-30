const isValidDomain = require('is-valid-domain') //regex domain validator
const Domain = require("domain-check").Domain;

/*this function receives a domain and return false if domain 
*is already registered, or true if domain is not registered
*/
async function domainavailability(userDomain) {
    let domainStatus = { domain_Availability: "not available" }
    //regex domain validator
    if (isValidDomain(userDomain)) {
        //check domain purchase availability
        if (await Domain.isFree(userDomain)) {
            return domainStatus.domain_Availability = "availabe";
        }
        else domainStatus;
    } else {
        return "Invalid domain entered";
    }
}

module.exports = { domainavailability };



