const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");
class Users extends Model {}
Users.init(
  {
    userEmail: {
      primaryKey: true,
      type: DataTypes.STRING(),
      allowNull: false,
    },
    userName: {
      unique: true,
      type: DataTypes.STRING(),
      allowNull: false,
    },
    password: {
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
module.exports = Users;
