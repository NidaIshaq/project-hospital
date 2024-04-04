const sequelize = require("../bin/dbConnection");
const Users = require("./definitions/users");
const signup = require("./definitions/signup");
const Appointments = require("./definitions/appointments");
const Roles = require("./definitions/roles");
const Messages = require("./definitions/message");
const userAppointment = require("./definitions/userAppointment");

// relation start here
Appointments.hasOne(Users, { foreignKey: "appointmentId" });
Users.belongsTo(Appointments, { foreignKey: "appointmentId" });

//role
Roles.hasMany(Users, { foreignKey: "rolesId" });
Users.belongsTo(Roles, { foreignKey: "rolesId" });
//appointment
// Appointments.hasMany(Users, { foreignKey: "appointmentId" });
// Users.belongsTo(Appointments, { foreignKey: "appointmentId" });

Users.hasMany(userAppointment, { foreignKey: "userId" });
userAppointment.belongsTo(Users, { foreignKey: "userId" });
Appointments.hasMany(userAppointment, { foreignKey: "appointmentId" });
userAppointment.belongsTo(Appointments, { foreignKey: "appointmentId" });
const models = {
  Users,
  signup,
  Appointments,
  Roles,
  Messages,
  userAppointment,
};

const db = {};
db.sequelize = sequelize;
sequelize.models = models;
module.exports = { db, models };
