const userModel = require("../models/userModel");
const { hash } = require("bcryptjs");
const { v4: uuid } = require("uuid");
module.exports = {
  createRole: async (body) => {
    try {
      body.rolesId = uuid();
      const role = await userModel.createRole(body);
      if (role.error) {
        return {
          error: role.error,
        };
      }
      return {
        response: role.response,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  getRole: async () => {
    try {
      const role = await userModel.getRole();
      if (role.error) {
        return {
          error: role.error,
        };
      }
      return {
        response: role.response,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  createappointment: async (body) => {
    try {
      const appointment = {
        appointmentId: uuid(),
        userName: body.userName,
        email: body.email,
        phone: body.phone,
        nic: body.nic,
        dob: body.dob,
        gender: body.gender,
        appointment_date: body.appointment_date,
        status: body.status,
      };
      const createAppoint = await userModel.createappointment(appointment);
      if (createAppoint.error) {
        //console.log("mcreateerr", error);

        return {
          error: createAppoint.error,
        };
      }
      return {
        response: createAppoint.response,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  createuser: async (body) => {
    try {
      const isUser = await userModel.getuserByuserName(body.userName);
      if (isUser.error || isUser.response) {
        //console.log("check user error", body.phone);
        return {
          error: "user with this username already exist",
        };
      }

      const user = {
        userId: uuid(),
        password: await hash(body.password, 10),
        rolesId: body.rolesId,
        email: body.email,
        appointmentId: body.appointmentId,
        userName: body.userName,

        phone: body.phone,
        nic: body.nic,
        dob: body.password,
        gender: body.gender,
      };
      const createduser = await userModel.createuser(user);
      //console.log("data", user);
      if (createduser.error) {
        //console.log("createuser", user);

        return {
          error: createduser.error,
        };
      }
      //delete password before show on frontend coz its confidential
      delete createduser.response.dataValues.password;
      return {
        response: createduser.response,
      };
    } catch (error) {
      //console.log("serviceerr", error);

      return {
        error: error.message,
      };
    }
  },

  getAlluser: async () => {
    try {
      const users = await userModel.getAlluser();
      if (users.error) {
        return {
          error: users.error,
        };
      }
      return {
        response: users.response,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  deleteuser: async (query) => {
    try {
      const deletedUser = await userModel.deleteuser(query.userId);
      if (deletedUser.error) {
        return {
          error: deletedUser.error,
        };
      }
      return {
        response: deletedUser.response,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  updateuser: async () => {
    try {
      const updatedUser = await userModel.updateuser();
      if (updatedUser.error) {
        return {
          error: updatedUser.error,
        };
      }
      return {
        response: updatedUser.response,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  recoveruser: async (body) => {
    try {
      const updatedUser = await userModel.recoveruser(body, body.userId);
      if (updatedUser.error) {
        return {
          error: updatedUser.error,
        };
      }
      return {
        response: updatedUser.response,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  getuserByUserId: async (query) => {
    try {
      const user = await userModel.getuserByUserId(query.userId);
      if (user.error) {
        return {
          error: user.error,
        };
      }
      return {
        response: user.response,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  //appointment
  deleteappointment: async (query) => {
    try {
      const deletedAppointment = await userModel.deleteappointment(
        query.appointmentId
      );
      if (deletedAppointment.error) {
        return {
          error: deletedAppointment.error,
        };
      }
      return {
        response: deletedAppointment.response,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  getAllappointment: async () => {
    try {
      const appointment = await userModel.getAllappointment();
      if (appointment.error) {
        return {
          error: appointment.error,
        };
      }
      return {
        response: appointment.response,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
};
