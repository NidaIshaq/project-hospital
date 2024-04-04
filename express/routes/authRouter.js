const routes = require("express").Router();
const { login } = require("../controller/authController");
routes.post("/login", login);
module.exports = routes;
