const helmet = require("helmet");
const xss = require("xss-clean");
const cors = require("cors");
const express = require("express");

module.exports = (app) => {
  app.use(helmet());
  app.use(xss());
  app.use(cors());
  app.use(express.json());
};
