const nodemailer = require ('nodemailer');
require ('dotenv').config ();

//forgot password
async function sendEmail (email) {
  let link = 'http://localhost:5000/api/v1/users/reset-password';
  
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
    subject: `Novelty | Password reset`,
  
    to: email,
    from: `Novelty Team`,
    html: `<h1>Hi,</h1>
      <h2>Here is your password reset key</h2>
      <h2><code contenteditable="false" style="font-weight:200;font-size:1.5rem;padding:5px 10px; background: #EEEEEE; border:0">$</code></h4>
      <p>Please ignore if you didn't try to reset your password on our platform</p>`,
  };

  transporter.sendMail (mailOptions, (error, response) => {
    if (error) {
      console.log ('error:\n', error, '\n');
    } else {
      console.log ('email sent:\n', response);
    }
  });
}

module.exports = { sendEmail }