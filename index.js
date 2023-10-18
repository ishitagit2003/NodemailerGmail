const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'myemail@gmail.com',
    pass: 'mypass'
  }
});

let mailOptions = {
  from: 'myemail@gmail.com',
  to: 'friendemail@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'Hello I see you!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});