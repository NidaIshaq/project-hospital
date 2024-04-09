const { models } = require("./index");
module.exports = {
  createsingup: async (body) => {
    try {
      const signup = await models.Users.create({ ...body });
      return {
        response: signup,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
};
