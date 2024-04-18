import PropTypes from "prop-types";
import React, { useState } from "react";

import Messages from "./Messages";
import Doctors from "./Doctors";
import Users from "./User";

Dashboard.propTypes = {
  option: PropTypes.string.isRequired,
};

function Dashboard({ option }) {
  const [showUsers, setShowUsers] = useState(false); // State to manage the visibility of the Users component

  // Function to handle the display of user data
  const showAllUsers = () => {
    setShowUsers(true);
  };

  return (
    <>
      <div className="dashboard bg-gray-300 p-4">
        {option === "messages" && <Messages />}
        {option === "doctors" && <Doctors />}
        {option === "User" && <Users />}
      </div>
    </>
  );
}

export default Dashboard;
