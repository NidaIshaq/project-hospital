const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");
class Users extends Model {}
Users.init(
  {
    userId: {
      primaryKey: true,
      type: DataTypes.STRING(),
    },
    email: {
      unique: true,
      type: DataTypes.STRING(),
      allowNull: false,
    },
    userName: {
      type: DataTypes.STRING(),
      allowNull: false,
    },

    password: {
      type: DataTypes.STRING(),
      allowNull: false,
      unique: true,
    },
    phone: {
      type: DataTypes.STRING(),
      required: true,
    },
    nic: {
      type: DataTypes.STRING(),
      required: true,
    },
    dob: {
      type: DataTypes.STRING(),
      required: true,
    },
    gender: {
      type: DataTypes.STRING(),
      required: true,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize,
  }
);
module.exports = Users;
