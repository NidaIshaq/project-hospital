const {
  createMessage,
  getAllmessage,
} = require("../controller/messageController");
const routes = require("express").Router();
routes.post("/createmessage", createMessage);
routes.get("/getallmessage", getAllmessage);
module.exports = routes;
