const { middleware } = require("../middleware");
const routes = require("express").Router();
const {
  createuser,
  createappointment,
  deleteappointment,
  getAllappointment,
  getAlluser,
  createRole,
  getRole,
  deleteuser,
  updateuser,
  recoveruser,
  getuserByUserId,
} = require("../controller/userController");
routes.post("/createRole", createRole);
routes.post("/createappointment", createappointment);
routes.get("/getRole", getRole);
routes.post("/createuser", createuser);
routes.get("/getAlluser", middleware, getAlluser);
routes.get("/getAlluser", getAlluser);

routes.get("/deleteappointment", deleteappointment);
routes.get("/getAppointment", getAllappointment);
routes.delete("/deleteUser", deleteuser);
routes.patch("/updateUser", updateuser);
routes.put("/recoverUser", recoveruser);
routes.get("/getuser", getuserByUserId);
module.exports = routes;
