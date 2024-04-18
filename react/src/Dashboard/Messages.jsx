import React, { useEffect, useState } from "react";
import axios from "axios";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get("http://localhost:4000/message/getallmessage", {
          withCredentials: true
        });
        setMessages(response.data.response || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching messages:", error);
        setError("Failed to fetch messages");
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className="page messages">
      <h1>MESSAGES</h1>
      <div className="banner">
        {messages.length > 0 ? (
          messages.map((message) => (
            <div className="card" key={message.userName}>
              <div className="details">
                <p>User Name: <span>{message.userName}</span></p>
                <p>Email: <span>{message.email}</span></p>
                <p>Phone: <span>{message.phone}</span></p>
                <p>Message: <span>{message.message}</span></p>
              </div>
            </div>
          ))
        ) : (
          <h1>No Messages Found!</h1>
        )}
      </div>
    </section>
  );
};

export default Messages;
