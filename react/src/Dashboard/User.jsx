import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context } from "../main";

const Users = () => {
  const [users, setUsers] = useState([]);
  const { isAuthenticated } = useContext(Context);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/user/getAlluser",
          { withCredentials: true }
        );
        setUsers(response.data.response || []); // Assuming the response contains an array of users
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  // if (!isAuthenticated) {
  //   return <Navigate to={"/login"} />;
  // }

  return (
    <section className="page users">
      <h1>USERS</h1>
      <div className="banner">
        {users.length > 0 ? (
          users.map((user) => (
            <div className="card" key={user._id}>
              <p>User Name: <span>{user.userName}</span></p>
              <p>Email: <span>{user.userEmail}</span></p>
              <p>Phone: <span>{user.phone}</span></p>
              <p>Date of Birth: <span>{user.dob}</span></p>
              <p>Gender: <span>{user.gender}</span></p>
            
            </div>
          ))
        ) : (
          <h1>No Users Found!</h1>
        )}
      </div>
    </section>
  );
};

export default Users;
