const cors = require("cors");
const bodyParser = require("body-parser");
const livros = require("./livrosRoute.js");
const express = require("express");

module.exports = (app) => {
  app.use(cors());
  app.use("/uploads", express.static("uploads"));
  app.use(bodyParser.json(), livros);
};
