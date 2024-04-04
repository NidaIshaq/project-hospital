const { verify } = require("jsonwebtoken");
require("dotenv").config();
module.exports = {
  middleware: async (req, res, next) => {
    try {
      //for check token
      //console.log("req data", req.cookies.token);
      if (req.cookies.token == undefined || null) {
        return res.send({
          error: "Unauthorised User",
        });
      }
      verify(req.cookies.token, process.env.SECRET, (error, user) => {
        console.log("user", user);
        if (error) {
          return res.send({
            error: "Unauthorised User",
          });
        }
        console.log("user data", user);
        next();
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
  // drauthenticate: async (req, res, next) => {
  //   try {
  //     if (req.user.role !== Doctor) {
  //       return res.send({
  //         error: "unauthorized for this role",
  //       });
  //     }
  //     verify(req.cookies.token, process.env.SECRET, (error, user) => {
  //       console.log("user", user);
  //       if (error) {
  //         return res.send({
  //           error: "Unauthorised User",
  //         });
  //       }
  //       console.log("user data", user);
  //       next();
  //     });
  //   } catch (error) {
  //     return res.send({
  //       error: error.message,
  //     });
  //   }
  // },
};
