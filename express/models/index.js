const sequelize = require("../bin/dbConnection");
const Users = require("./definitions/users");
const signup = require("./definitions/signup");
const Appointments = require("./definitions/appointments");

const Messages = require("./definitions/message");

const models = {
  Users,
  signup,
  Appointments,

  Messages,
};

const db = {};
db.sequelize = sequelize;
sequelize.models = models;
module.exports = { db, models };
