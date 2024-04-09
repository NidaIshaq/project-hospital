const { models } = require("./index");
const { Op } = require("sequelize");
module.exports = {
  //dr
  createdr: async (body) => {
    try {
      const createddr = await models.Doctor.create({ ...body });
      return {
        response: createddr,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  getAlldr: async () => {
    try {
      const createddr = await models.Doctor.findAll({
        attributes: [
          "doctorEmail",
          "userName",
          "phone",
          "dob",
          "department",
          "nic",
          "gender",
        ],
      });
      return {
        response: createddr,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },

  //admin
  createAdmin: async (body) => {
    try {
      const createdadmin = await models.Admin.create({ ...body });
      return {
        response: createdadmin,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },

  //user
  createuser: async (body) => {
    try {
      const createduser = await models.Users.create({ ...body });
      return {
        response: createduser,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },

  getAlluser: async () => {
    try {
      const createduser = await models.Users.findAll({
        attributes: ["userName", "userEmail", "phone", "dob", "gender"],
      });
      return {
        response: createduser,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },

  getuserByuserName: async (userName) => {
    try {
      const user = await models.Users.findOne({
        where: {
          userName: userName,
        },
      });
      //console.log("data5", user);

      return {
        response: user,
      };
    } catch (error) {
      console.log("modelerror", error);

      return {
        error: error.message,
      };
    }
  },

  deleteuser: async (userEmail) => {
    try {
      const deletedUser = await models.Users.destroy({
        where: {
          userEmail: userEmail,
        },
      });
      return {
        response: deletedUser,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  updateuser: async () => {
    try {
      const updatedUser = await models.Users.update(
        {
          deletedAt: null,
        },
        {
          where: {
            deletedAt: {
              [Op.ne]: null,
            },
          },
          paranoid: false,
        }
      );
      return {
        response: updatedUser,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  recoveruser: async (body, userEmail) => {
    try {
      const updatedUser = await models.Users.update(
        {
          ...body,
        },
        {
          where: {
            userEmail: userEmail,
          },
        }
      );
      return {
        response: updatedUser,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  getuserByUserEmail: async (userEmail) => {
    try {
      const user = await models.Users.findOne({
        where: {
          userEmail: userEmail,
        },
        attributes: ["userName", "userEmail", "phone", "dob", "gender"],
      });

      return {
        response: user,
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
      const appointment = await models.Appointments.create({ ...body });
      return {
        response: appointment,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  deleteappointment: async (userEmail) => {
    try {
      const deletedAppointment = await models.Appointments.destroy({
        where: {
          userEmail: userEmail,
        },
      });
      return {
        response: deletedAppointment,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  getAllappointment: async () => {
    try {
      const createdappointment = await models.Appointments.findAll({
        attributes: [
          "userName",
          "department",
          "email",
          "status",
          "appointment_date",
          "doctorName",
          "hasVisited",
        ],
      });
      return {
        response: createdappointment,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
};
