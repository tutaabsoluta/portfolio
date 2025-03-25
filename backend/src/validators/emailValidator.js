const { body } = require("express-validator");

const emailValidator = [
  body("name").isString().trim().escape().isLength({ min: 3, max: 30 }).withMessage("Name must be between 3 and 30 characters"),
  body("email").isEmail().normalizeEmail().withMessage("Please provide a valid email"),
  body("subject").isString().trim().escape().isLength({ min: 3, max: 150 }).withMessage("Subject must be between 3 and 150 characters"),
  body("message").isString().trim().escape().isLength({ min: 10, max: 1000 }).withMessage("Message must be between 10 and 1000 characters"),
];

module.exports = emailValidator;
