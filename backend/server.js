const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();

require("dotenv").config();

app.use(cors());
app.use(express.json());
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.MAILER_EMAIL,
    pass: process.env.MAILER_KEY,
  },
});

app.post("/api/send", (req, res) => {
  const mailOptions = {
    to: process.env.MAILER_EMAIL,
    subject: req.body.subject,
    html: `
        <p><strong>From:</strong> ${req.body.name}</p>
        <p><strong>Email:</strong> ${req.body.email}</p>
        <hr>
        <p>${req.body.message}</p>
    `,
  }; 
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error);
    }
    res.status(200).send("Email sent successfully");
  });
});

const port = process.env.PORT;
app.listen(port, () => console.log(`Server running on port ${port}`));
