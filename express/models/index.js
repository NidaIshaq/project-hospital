const sequelize = require("../bin/dbConnection");
const Users = require("./definitions/users");
const Appointments = require("./definitions/appointments");
const Messages = require("./definitions/message");
const Doctor = require("./definitions/doctor");
const Admin = require("./definitions/admin");

// relation start here
Users.hasMany(Appointments, { foreignKey: "userEmail" });
Appointments.belongsTo(Users, { foreignKey: "userEmail" });

Doctor.hasMany(Appointments, { foreignKey: "doctorEmail" });
Appointments.belongsTo(Doctor, { foreignKey: "doctorEmail" });

const models = {
  Users,
  Appointments,
  Messages,
  Doctor,
  Admin,
};

const db = {};
db.sequelize = sequelize;
sequelize.models = models;
module.exports = { db, models };
