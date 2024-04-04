const authService = require("../service/authService");
const joi = require("joi");
const loginSchema = joi.object().keys({
  password: joi.string().required(),
  userName: joi.string().required(),
});

module.exports = {
  login: async (req, res) => {
    try {
      const validate = await loginSchema.validateAsync(req.body);
      const isLogin = await authService.login(validate);
      if (isLogin.error) {
        return res.send({
          error: isLogin.error,
        });
      }
      res.cookie("token", isLogin.response, {
        maxAge: 60000,
        httpOnly: true,
      });
      //for check token
      //console.log("token", isLogin.response);
      return res.send({
        response: true,
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
};
