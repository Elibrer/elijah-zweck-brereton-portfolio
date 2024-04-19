const { sendEmail } = require('./emailController');
const { emailMiddleware } = require('./emailMiddleware');

module.exports = { sendEmail, emailMiddleware };
