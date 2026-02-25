import { useEffect, useState } from "react";
import { getMessages } from "../api/messages";

function MessageList({ userId }) {
  const [messages, setMessages] = useState([]);
  const userEmail = sessionStorage.getItem("userEmail");

    async function fetchData() {
      const data = await getMessages(userId);
      setMessages(data);
    }

  useEffect(() => {
    

    fetchData();
  }, [userId]);

  return (
    <div>
      <button onClick={fetchData}>Refresh</button>
      <h3>Lista de mensajes</h3>
      {messages.map(msg => (
        <div key={msg._id} style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
          <strong>{msg.title}</strong>
          <br />
          ({userEmail === msg.sender
          ? "Sent from me"
          : "From " + msg.sender})
          <br />
          {/* <p>From: {msg.sender}</p> */}
          <p>{msg.text}</p>
        </div>
      ))}
    </div>
  );
}

export default MessageList;