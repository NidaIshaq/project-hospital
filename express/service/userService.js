const userModel = require("../models/userModel");
const { hash } = require("bcryptjs");
const { v4: uuid } = require("uuid");
module.exports = {
  createuser: async (body) => {
    try {
      const isUser = await userModel.getuserByuserName(body.userName);
      //console.log("data error", isUser);
      if (isUser.error || isUser.response) {
        return {
          error: "user with this username already exist",
        };
      }

      if (body.usertype.toLowerCase() === "doctor") {
        const doctor = {
          userName: body.userName,
          department: body.department,
          nic: body.nic,
          password: await hash(body.password, 10),
          dob: body.dob,
          gender: body.gender,
          doctorEmail: body.doctorEmail,
          phone: body.phone,
          usertype: body.usertype,
        };
        const createdDr = await userModel.createdr(doctor);
        if (createdDr.error) {
          return {
            error: "Error creating doctor:" + createdDr.error,
          };
        }
        delete createdDr.response.dataValues.password;
        return {
          response: createdDr.response,
        };
      }
      //admin

      if (body.usertype.toLowerCase() === "admin") {
        const admin = {
          userName: body.userName,
          nic: body.nic,
          password: await hash(body.password, 10),
          dob: body.dob,
          gender: body.gender,
          email: body.email,
          phone: body.phone,
          usertype: body.usertype,
        };
        const createdAdmin = await userModel.createAdmin(admin);
        if (createdAdmin.error) {
          return {
            error: createdAdmin.error,
          };
        }
        delete createdAdmin.response.dataValues.password;
        return {
          response: createdAdmin.response,
        };
      }
      //patient
      const user = {
        userId: uuid(),
        password: await hash(body.password, 10),
        userEmail: body.userEmail,
        userName: body.userName,
        phone: body.phone,
        nic: body.nic,
        dob: body.dob,
        gender: body.gender,
        usertype: body.usertype,
      };
      const createduser = await userModel.createuser(user);
      if (createduser.error) {
        return {
          error: "Error creating user:" + createduser.error,
        };
      }
      //delete password before show on frontend coz its confidential
      delete createduser.response.dataValues.password;
      return {
        response: createduser.response,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  getAlldr: async () => {
    try {
      const drs = await userModel.getAlldr();
      if (drs.error) {
        return {
          error: drs.error,
        };
      }
      return {
        response: drs.response,
      };
    } catch (error) {
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
      const deletedUser = await userModel.deleteuser(query.userEmail);
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
  getuserByUserEmail: async (query) => {
    try {
      const user = await userModel.getuserByUserEmail(query.userEmail);
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
      const updatedUser = await userModel.recoveruser(body, body.userEmail);
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

  //appointment
  createappointment: async (body) => {
    try {
      const appointment = {
        userName: body.userName,
        email: body.email,
        phone: body.phone,
        nic: body.nic,
        dob: body.dob,
        gender: body.gender,
        appointment_date: body.appointment_date,
        department: body.department,
        doctorName: body.doctorName,
        hasVisited: body.hasVisited,
        address: body.address,
        patientId: uuid(),
        status: body.status,
        userEmail: body.userEmail,
        doctorEmail: body.doctorEmail,
      };
      const createAppoint = await userModel.createappointment(appointment);
      if (createAppoint.error) {
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
  deleteappointment: async (query) => {
    try {
      const deletedAppointment = await userModel.deleteappointment(query.email);
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
