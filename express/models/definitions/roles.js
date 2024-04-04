const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class Roles extends Model {}

Roles.init(
  {
    rolesId: {
      primaryKey: true,
      type: DataTypes.STRING(),
    },
    rolename: {
      allowNull: false,
      type: DataTypes.STRING(),
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize,
  }
);
module.exports = Roles;
