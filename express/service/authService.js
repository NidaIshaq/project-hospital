const userModel = require("../models/userModel");
const { compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
require("dotenv").config();
module.exports = {
  login: async (body) => {
    try {
      console.log("bodyname", body.userName);
      const user = await userModel.getuserByuserName(body.userName);
      console.log("use", user);
      if (user.error || user.response == null) {
        return {
          error: "Invalid Credentials cuz of user.error",
        };
      }
      const isValid = await compare(
        body.password,
        user.response.dataValues.password
      );
      if (!isValid) {
        return {
          error: "Invalid Credentials from comparing",
        };
      }
      delete user.response.dataValues.password;
      const jwt = sign(user, process.env.SECRET, { expiresIn: "60000" });
      return {
        response: jwt,
      };
    } catch (error) {
      console.log("serviceerror", error);

      return {
        error: error.message,
      };
    }
  },
};
