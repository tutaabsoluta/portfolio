const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: process.env.MAILER_SERVICE,
  auth: {
    user: process.env.MAILER_EMAIL,
    pass: process.env.MAILER_KEY,
  },
});

module.exports = transporter;