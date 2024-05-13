const { models } = require("./index");
//const { Op } = require("sequelize");
module.exports = {
  createMessage: async (body) => {
    try {
      console.log("body of model1", body);
      const messages = await models.Messages.create({ ...body });
      console.log("body of model", body);
      return {
        response: messages,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  getAllmessage: async () => {
    try {
      const messages = await models.Messages.findAll({
        attributes: ["userName", "email", "phone", "message"],
      });

      return {
        response: messages,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
};
