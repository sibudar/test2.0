const isValidDomain = require("is-valid-domain"); //regex domain validator
const Domain = require("domain-check").Domain;

/**
 * check domain availability
 * @param {*} domain
 * @returns object.
 */
async function checkDomainAvailability(userDomain) {
    let domainStatus = { domain_Availability: "Invalid domain entered" };
    //regex domain validator
    if (isValidDomain(userDomain)) {
        //check domain purchase availability
        if (await Domain.isFree(userDomain)) {
            domainStatus.domain_Availability = "Domain is AVAILABLE for purchase";
            return domainStatus;
        } else {
            domainStatus.domain_Availability = "Domain is NOT AVAILABLE for purchase";
            return domainStatus
        }
    } else
        return domainStatus;
}

module.exports = { checkDomainAvailability };
