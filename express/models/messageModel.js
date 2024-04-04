const { models } = require("./index");
//const { Op } = require("sequelize");
module.exports = {
  createMessage: async (body) => {
    try {
      const messages = await models.Messages.create({ ...body });
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
        attributes: ["email", "phone", "message"],
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
