const { models } = require("./index");
const { Op } = require("sequelize");
module.exports = {
  createRole: async (body) => {
    try {
      const role = await models.Roles.create({ ...body });
      return {
        response: role,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  getRole: async () => {
    try {
      const role = await models.Roles.findAll({
        attributes: ["rolesId", "rolename"],
      });

      return {
        response: role,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  //user
  createappointment: async (body) => {
    try {
      const appointment = await models.Appointments.create({ ...body });
      return {
        response: appointment,
      };
    } catch (error) {
      //console.log("modererr", error);
      return {
        error: error.message,
      };
    }
  },

  createuser: async (body) => {
    try {
      const createduser = await models.Users.create({ ...body });
      //console.log("body", body);
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
        attributes: ["userName", "userId"],

        include: [
          {
            model: models.Appointments,
            attributes: ["appointmentId", "userName"],
          },
          {
            model: models.Roles,
            attributes: ["rolesId", "rolename"],
          },
        ],
      });
      //console.log("user data", createduser);
      return {
        response: createduser,
      };
    } catch (error) {
      //console.log("appointment", error);
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
      //console.log("user data", user);
      return {
        response: user,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },

  deleteuser: async (userId) => {
    try {
      const deletedUser = await models.Users.destroy({
        where: {
          userId: userId,
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
  recoveruser: async (body, userId) => {
    try {
      const updatedUser = await models.Users.update(
        {
          ...body,
        },
        {
          where: {
            userId: userId,
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
  getuserByUserId: async (userId) => {
    try {
      const user = await models.Users.findOne({
        where: {
          userId: userId,
        },
        attributes: ["userId", "username", "appointmentId", "rolesId"],
        include: [
          {
            model: models.Appointments,
            attributes: ["appointmentId", "disease"],
          },
          {
            model: models.Roles,
            attributes: ["rolesId", "rolename"],
          },
        ],
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
  deleteappointment: async (appointmentId) => {
    try {
      const deletedAppointment = await models.Appointments.destroy({
        where: {
          appointmentId: appointmentId,
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
          "phone",
          "email",
          "appointmentId",
          "status",
          "appointment_date",
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
