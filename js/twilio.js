require("dotenv").config();
const twilio = require("twilio");

// Pegando credenciais do .env
const accountSid = '';
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = new twilio(accountSid, authToken);

module.exports = client;