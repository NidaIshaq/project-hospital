// const messageService = require("../service/messageService");
// const joi = require("joi");
// const createMessageSchema = joi.object().keys({
//   userName: joi.string().required(),
//   email: joi.string().required(),
//   phone: joi.number().required(),
//   message: joi.string().required(),
// });
// module.exports = {
//   createMessage: async (req, res) => {
//     try {
//       console.log("body", body);
//       const validate = await createMessageSchema.validateAsync(req.body);

//       const messages = await messageService.createMessage(validate);

//       if (messages.error) {
//         return res.send({
//           error: messages.error,
//         });
//       }
//       return res.send({
//         response: messages.response,
//       });
//     } catch (error) {
//       console.log("controller error", error);
//       return res.send({
//         error: error.message,
//       });
//     }
//   },
const messageService = require("../service/messageService");
const joi = require("joi");

const createMessageSchema = joi.object().keys({
  userName: joi.string().required(),
  email: joi.string().required(),
  phone: joi.number().required(),
  message: joi.string().required(),
});

module.exports = {
  createMessage: async (req, res) => {
    try {
      // Access req.body instead of body
      console.log("req.body", req.body);
      const validate = await createMessageSchema.validateAsync(req.body);

      const messages = await messageService.createMessage(validate);

      if (messages.error) {
        return res.send({
          error: messages.error,
        });
      }
      return res.send({
        response: messages.response,
      });
    } catch (error) {
      console.log("controller error", error);
      return res.send({
        error: error.message,
      });
    }
  },

  getAllmessage: async (req, res) => {
    try {
      const messages = await messageService.getAllmessage();
      if (messages.error) {
        return res.send({
          error: messages.error,
        });
      }
      return res.send({
        response: messages.response,
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
};
