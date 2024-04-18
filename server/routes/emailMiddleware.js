const { sendEmail } = require('./emailController');

const emailMiddleware = async (req, res, next) => {
  const { Name, Email, Phone, Country, Enquiry } = req.body;
  console.log('Processing email request:', req.body);

  try {
    await sendEmail(Name, Email, Phone, Country, Enquiry);
    // next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
};

module.exports = { emailMiddleware };