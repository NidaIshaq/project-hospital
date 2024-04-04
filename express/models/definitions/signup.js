const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class signup extends Model {}
signup.init(
  {
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
    password: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING(),
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
module.exports = signup;
