const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");
class Admin extends Model {}
Admin.init(
  {
    userName: {
      unique: true,
      type: DataTypes.STRING(),
      allowNull: false,
    },
    email: {
      primaryKey: true,
      type: DataTypes.STRING(),
      required: true,
    },
    password: {
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
    phone: {
      type: DataTypes.STRING(),
      required: true,
    },
    usertype: {
      type: DataTypes.STRING(),
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize,
  }
);
module.exports = Admin;
