const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'YourEmailService',
  auth: {
    user: 'YourEmailAddress',
    pass: 'YourEmailPassword',
  },
});

const sendEmail = (to, subject, text) => {
  const mailOptions = {
    from: 'YourEmailAddress',
    to: to,
    subject: subject,
    text: text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Email sending error:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};

module.exports = sendEmail;
