/**
 * Body message for resetting a user's password.
 * @param {*} name 
 * name of the user.
 * @param {*} link 
 * redirects the user to a change password page.
 * @returns the body message for reset message.
 */
function resetMessage(name, link){
    return `<h2>Hi ${name}</h2>
    <h2>Please click <a href="${link}">here</a> to reset your password </h2>
    <h2><code contenteditable="false" style="font-weight:200;font-size:1.5rem;padding:5px 10px; background: #EEEEEE; border:0">$</code></h4>
    <p>Please ignore if you didn't try to reset your password on our platform</p>`;
}

module.exports = { resetMessage };
