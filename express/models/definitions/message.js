const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class Messages extends Model {}

Messages.init(
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
    phone: {
      type: DataTypes.STRING(),
      required: true,
    },
    message: {
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
module.exports = Messages;
