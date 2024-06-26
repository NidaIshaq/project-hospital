//const { response } = require("../app");
const messageModel = require("../models/messageModel");
module.exports = {
  createMessage: async (body) => {
    try {
      const message = {
        userName: body.userName,
        email: body.email,
        phone: body.phone,
        message: body.message,
      };
      console.log("service message error1 ", message);
      const createdmessages = await messageModel.createMessage(message);
      console.log("service message error ", message);
      return {
        response: createdmessages.response,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  getAllmessage: async () => {
    try {
      const messages = await messageModel.getAllmessage();
      if (messages.error) {
        return {
          error: messages.error,
        };
      }
      return {
        response: messages.response,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
};
