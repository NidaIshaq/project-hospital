const userService = require("../service/userService");
const joi = require("joi");
const createduserSchema = joi.object().keys({
  password: joi.string().required(),
  email: joi.string().required(),
  //rolesId: joi.string().required(),
  //appointmentId: joi.string().required(),
  userName: joi.string().required(),
  phone: joi.number().required().min(11),
  nic: joi.number().required().min(13),
  dob: joi.string().required(),
  gender: joi.string().required(),
});
const createRoleSchema = joi.object().keys({
  rolename: joi.string().required().valid("Doctor", "Patient", "Admin"),
});
const createappointmentSchema = joi.object().keys({
  userName: joi.string().required(),
  phone: joi.number().required(11),
  nic: joi.number().required().min(13),
  dob: joi.string().required(),
  gender: joi.string().required(),
  appointment_date: joi.string().required(),
  status: joi.string().required(),
  email: joi.string().required(),
  //userId: joi.string().required(),
});
const deleteuserSchema = joi.object().keys({
  userId: joi.string().required(),
});
const deleteappointmentSchema = joi.object().keys({
  appointmentId: joi.string().required(),
});
const getuserByUserIdSchema = joi.object().keys({
  userId: joi.string().required(),
});

const updateuserSchema = joi.object().keys({
  userName: joi.string().required(),
  userId: joi.string().required(),
});
module.exports = {
  createRole: async (req, res) => {
    try {
      const validate = await createRoleSchema.validateAsync(req.body);

      const role = await userService.createRole(validate);

      if (role.error) {
        return res.send({
          error: role.error,
        });
      }
      return res.send({
        response: role.response,
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
  getRole: async (req, res) => {
    try {
      const role = await userService.getRole();
      if (role.error) {
        return res.send({
          error: role.error,
        });
      }
      return res.send({
        response: role.response,
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
  createappointment: async (req, res) => {
    try {
      const validate = await createappointmentSchema.validateAsync(req.body);

      const appointment = await userService.createappointment(validate);

      if (appointment.error) {
        console.log("catchcreateerr val", appointment.error);

        return res.send({
          error: appointment.error,
        });
      }
      return res.send({
        response: appointment.response,
      });
    } catch (error) {
      //console.log("modererr", error);
      console.log("catchcreateerr app", error);

      return res.send({
        error: error.message,
      });
    }
  },
  createuser: async (req, res) => {
    try {
      const validate = await createduserSchema.validateAsync(req.body);

      const createduser = await userService.createuser(validate);
      //console.log("check response", createduser);
      if (createduser.error) {
        //console.log("checkcac", createduser.error);

        return res.send({
          error: createduser.error,
        });
      }
      return res.send({
        response: createduser.response,
      });
    } catch (error) {
      //console.log("modererr", error);

      return res.send({
        error: error.message,
      });
    }
  },
  getAlluser: async (req, res) => {
    try {
      const users = await userService.getAlluser();
      if (users.error) {
        return res.send({
          error: users.error,
        });
      }
      return res.send({
        response: users.response,
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
  deleteuser: async (req, res) => {
    try {
      const validate = await deleteuserSchema.validateAsync(req.query);
      const deletedUser = await userService.deleteuser(validate);
      if (deletedUser.error) {
        return res.send({
          error: deletedUser.error,
        });
      }
      return res.send({
        response: deletedUser.response,
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
  updateuser: async (req, res) => {
    try {
      const updatedUser = await userService.updateuser();
      if (updatedUser.error) {
        return res.send({
          error: updatedUser.error,
        });
      }
      return res.send({
        response: updatedUser.response,
      });
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  recoveruser: async (req, res) => {
    try {
      const validate = await updateuserSchema.validateAsync(req.body);
      const updatedUser = await userService.recoveruser(validate);
      if (updatedUser.error) {
        return res.send({
          error: updatedUser.error,
        });
      }
      return res.send({
        response: updatedUser.response,
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
  getuserByUserId: async (req, res) => {
    try {
      const validate = await getuserByUserIdSchema.validateAsync(req.query);
      const user = await userService.getuserByUserId(validate);
      if (user.error) {
        return res.send({
          error: user.error,
        });
      }
      return res.send({
        response: user.response,
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
  //appointment
  deleteappointment: async (req, res) => {
    try {
      const validate = await deleteappointmentSchema.validateAsync(req.query);
      const deletedAppointment = await userService.deleteappointment(validate);
      if (deletedAppointment.error) {
        return res.send({
          error: deletedAppointment.error,
        });
      }
      return res.send({
        response: deletedAppointment.response,
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
  getAllappointment: async (req, res) => {
    try {
      const appointment = await userService.getAllappointment();
      if (appointment.error) {
        return res.send({
          error: appointment.error,
        });
      }
      return res.send({
        response: appointment.response,
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
};
