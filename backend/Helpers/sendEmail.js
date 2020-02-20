const nodemailer = require ('nodemailer');
require ('dotenv').config ();



//forgot password
async function sendEmail (email, body, _subject) {
  //let link = 'http://localhost:5000/api/v1/users/reset-password';
  
  //configuring smtp transport machanism for password reset email
  let transporter = nodemailer.createTransport ({
    service: 'gmail',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL, // your gmail address
      pass: process.env.EMAIL_PASSWORD, // your gmail password
    },
  });

  let mailOptions = {
    subject: _subject,
  
    to: email,
    from: `Novelty Team`,
    html: body
  };

  transporter.sendMail(mailOptions, (error, response) => {
    if (error) {
      console.log ('error:\n', error, '\n');
    } else {
      console.log ('email sent:\n', response);
    }
  });
}

module.exports = { sendEmail }