const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class Appointments extends Model {}

Appointments.init(
  {
    patientId: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    userName: {
      unique: true,
      type: DataTypes.STRING(),
      allowNull: false,
    },
    email: {
      primaryKey: true,
      type: DataTypes.STRING(),
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    nic: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    dob: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    appointment_date: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    department: {
      type: DataTypes.STRING(),
      allowNull: false,
    },

    doctorName: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    hasVisited: {
      type: DataTypes.BOOLEAN(),
      default: false,
    },
    address: {
      type: DataTypes.STRING(),
      allowNull: false,
    },

    status: {
      type: DataTypes.STRING(),
      enum: ["Pending", "Accepted", "Rejected"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize,
  }
);
module.exports = Appointments;
