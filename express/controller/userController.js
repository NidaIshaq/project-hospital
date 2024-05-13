const { createdr } = require("../models/userModel");
const userService = require("../service/userService");
const joi = require("joi");
const createduserSchema = joi.object().keys({
  password: joi.string().required(),
  userEmail: joi.string().required(),
  userName: joi.string().required(),
  phone: joi.number().required(),
  nic: joi.number().required(),
  dob: joi.string().required(),
  gender: joi.string().required(),
  usertype: joi.string().required(),
  department: joi.string().required(),
  doctorEmail: joi.string().required(),
  email: joi.string().required(),
});
const createddrSchema = joi.object().keys({
  password: joi.string().required(),
  userName: joi.string().required(),
  phone: joi.number().required(),
  nic: joi.number().required(),
  dob: joi.string().required(),
  gender: joi.string().required(),
  usertype: joi.string().required(),
  department: joi.string().required(),
  doctorEmail: joi.string().required(),
});
const createappointmentSchema = joi.object().keys({
  userName: joi.string().required(),
  phone: joi.number().required(),
  nic: joi.number().required(),
  dob: joi.string().required(),
  gender: joi.string().required(),
  appointment_date: joi.string().required(),
  email: joi.string().required(),
  status: joi.string().required(),
  doctorName: joi.string().required(),
  address: joi.string().required(),
  hasVisited: joi.string().required(),
  department: joi.string().required(),
  userEmail: joi.string().required(),
  doctorEmail: joi.string().required(),
});
const deleteuserSchema = joi.object().keys({
  userEmail: joi.string().required(),
});
const deleteappointmentSchema = joi.object().keys({
  email: joi.string().required(),
});
const getuserByUserEmailSchema = joi.object().keys({
  userEmail: joi.string().required(),
});

const updateuserSchema = joi.object().keys({
  userName: joi.string().required(),
  userEmail: joi.string().required(),
});
module.exports = {
  getAlldr: async (req, res) => {
    try {
      const drs = await userService.getAlldr();
      if (drs.error) {
        return res.send({
          error: drs.error,
        });
      }
      return res.send({
        response: drs.response,
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
      return res.send({
        error: error.message,
      });
    }
  },
  createuser: async (req, res) => {
    try {
      const validate = await createduserSchema.validateAsync(req.body);
      const createduser = await userService.createuser(validate);
      if (createduser.error) {
        return res.send({
          error: createduser.error,
        });
      }
      return res.send({
        response: createduser.response,
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
  createdr: async (req, res) => {
    try {
      const validate = await createddrSchema.validateAsync(req.body);
      const createddr = await userService.createdr(validate);
      if (createddr.error) {
        return res.send({
          error: createddr.error,
        });
      }
      return res.send({
        response: createddr.response,
      });
    } catch (error) {
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
  getuserByUserEmail: async (req, res) => {
    try {
      const validate = await getuserByUserEmailSchema.validateAsync(req.query);
      const userByEmail = await userService.getuserByUserEmail(validate);
      if (userByEmail.error) {
        return res.send({
          error: userByEmail.error,
        });
      }
      return res.send({
        response: userByEmail.response,
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
