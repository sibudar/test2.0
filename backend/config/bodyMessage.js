<<<<<<< HEAD
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
=======
// <h2>Here is your password reset key</h2>
// <h2><code contenteditable="false" style="font-weight:200;font-size:1.5rem;padding:5px 10px; background: #EEEEEE; border:0">$</code></h4>
// <p>Please ignore if you didn't try to reset your password on our platform</p>`

function resetMessage(name, link) {
  return `<h2>Hi ${name}</h2>
    <p>Please click <a href="${link}">here</a> to reset your password </p>
    <p>Please ignore if you didn't try to reset your password on our platform</p>`;
}

function registerMessage(name) {
  return `<h2>Hi ${name}</h2>
    <p>Congratulation! Your account has been registered successful</p>`;
}

function resetSubject() {
  return "Novelty | Reset Password.";
}

function registerSubject() {
  return "Novelty | Account Registered.";
}

module.exports = {resetMessage, registerMessage, resetSubject, registerSubject};
>>>>>>> 9d7de7dfc5e104ef1fbd037645a1c1c00b421b24
