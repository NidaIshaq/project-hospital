const userModel = require("../models/userModel");
const { compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  login: async (body) => {
    try {
      //console.log("bodyname", body.userName);
      const user = await userModel.getuserByuserName(body.userName);
      if (user.error || user.response == null) {
        //console.log("error", user.error);
        return {
          error: "Invalid Credentials for user",
        };
      }
      const doctor = await userModel.getdoctorByuserName(body.userName);
      if (doctor.error || doctor.response) {
        return {
          error: "Invalid Credential for doctor",
        };
      }
      const isValid = await compare(
        body.password,
        user.response.dataValues.password
      );
      if (!isValid) {
        // console.log("data", isValid);
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
      //console.log("serviceerror", error);

      return {
        error: error.message,
      };
    }
  },
};
