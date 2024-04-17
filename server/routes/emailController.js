const nodemailer = require('nodemailer');

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'eli.brer@gmail.com',
    pass: 'uorf hxsb ecxt vvjn',
  },
});

const sendEmail = (name, email, phone, country, enquiry) => {
  return new Promise((resolve, reject) => {
    const allDetails = { name, email, phone, country, enquiry };
    console.log(allDetails);
    
    // Email content
    const mailOptions = {
      from: email,
      to: 'eli.brer@gmail.com',
      subject: 'New Contact Form Submission from Elibrer.com',
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        ${phone ? `<p>Phone: ${phone}</p>` : ''}
        ${country ? `<p>Country: ${country}</p>` : ''}
        <p>Enquiry: ${enquiry}</p>
      `,
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        reject('Error sending email');
      } else {
        console.log('Email sent: ' + info.response);
        resolve('Email sent successfully');
      }
    });
  });
};

module.exports = { sendEmail };