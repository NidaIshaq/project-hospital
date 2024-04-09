//const { middleware } = require("../middleware");
const routes = require("express").Router();
const {
  createuser,
  createappointment,
  deleteappointment,
  getAllappointment,
  getAlluser,
  getAlldr,
  deleteuser,
  updateuser,
  recoveruser,
  getuserByUserEmail,
} = require("../controller/userController");
routes.post("/createappointment", createappointment);
routes.post("/createuser", createuser);
//routes.get("/getAlluser", middleware, getAlluser);
routes.get("/getAlluser", getAlluser);
routes.get("/getAlldr", getAlldr);
routes.get("/deleteappointment", deleteappointment);
routes.get("/getAppointment", getAllappointment);
routes.delete("/deleteUser", deleteuser);
routes.patch("/updateUser", updateuser);
routes.put("/recoverUser", recoveruser);
routes.get("/getuser", getuserByUserEmail);
module.exports = routes;
