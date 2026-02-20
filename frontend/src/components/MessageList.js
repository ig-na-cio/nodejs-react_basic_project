import { useEffect, useState } from "react";
import { getMessages } from "../api/messages";

function MessageList({ userId }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getMessages(userId);
      setMessages(data);
    }

    fetchData();
  }, [userId]);

  return (
    <div>
      <h3>Lista de mensajes</h3>
      {messages.map(msg => (
        <div key={msg._id}>
          <strong>{msg.title}</strong>
          <p>{msg.text}</p>
        </div>
      ))}
    </div>
  );
}

export default MessageList;