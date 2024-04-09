const signupService = require("../service/signupService");
const joi = require("joi");

const createsignupSchema = joi.object().keys({
  userName: joi.string().required(),
  email: joi.string().required(),
  password: joi.string().required(),
  phone: joi.number().required(11),
  nic: joi.number().required(13),
  dob: joi.string().required(),
  gender: joi.string().required(),
});
module.exports = {
  createsignup: async (req, res) => {
    try {
      const validate = await createsignupSchema.validateAsync(req.body);

      const signup = await signupService.createsignup(validate);

      if (signup.error) {
        return res.send({
          error: signup.error,
        });
      }
      return res.send({
        response: signup.response,
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
};
