const express = require("express");
const { sendEmail } = require("../controllers/emailController");
const emailValidator = require("../validators/emailValidator");
const limiter = require("../middlewares/limiter");

const router = express.Router();

router.post("/send", limiter, emailValidator, sendEmail);

module.exports = router;
