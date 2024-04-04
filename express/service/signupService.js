const signupModel = require("../models/signupModel");
module.exports = {
  createsignup: async (body) => {
    try {
      const signup = await signupModel.createsingup(body);
      if (signup.error) {
        return {
          error: signup.error,
        };
      }
      return {
        response: signup.response,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
};
