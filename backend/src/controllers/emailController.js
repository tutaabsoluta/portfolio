const { validationResult } = require("express-validator");
const transporter = require("../config/transporter");

const sendEmail = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, subject, message } = req.body;

  const mailOptions = {
    to: process.env.MAILER_EMAIL,
    subject: subject,
    html: `
      <p><strong>From:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <hr>
      <p>${message}</p>
    `,
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.error("Email sending error:", error);
      return res.status(500).send({ error: "Failed to send email", details: error.message });
    }
    res.status(200).send("Email sent successfully");
  });
};

module.exports = { sendEmail };
