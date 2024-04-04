const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class userAppointment extends Model {}
userAppointment.init(
  {
    userAppointmentId: {
      primaryKey: true,
      type: DataTypes.STRING(),
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize,
  }
);
module.exports = userAppointment;
