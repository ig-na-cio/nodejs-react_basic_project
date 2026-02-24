import { useState } from "react";
import { sendMessage } from "../api/messages";

function MessageTyper({ userId }) {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");

  async function handleSubmit(e) {
      e.preventDefault();

        const data = await sendMessage(userId, title, text, recipientEmail);
        console.log("Mensaje enviado");
        console.log(data)
    }

  return (
    <div>
      <h3>Escriba su mensaje</h3>
      <form onSubmit={handleSubmit}>
        <input value={title} placeholder="title" onChange={e => setTitle(e.target.value)} />
        <input value={recipientEmail} placeholder="Send To:" onChange={e => setRecipientEmail(e.target.value)} />
        <input value={text} placeholder="text" onChange={e => setText(e.target.value)} />
        <button type="submit">Send</button>
      </form>
      
    </div>
  );
}

export default MessageTyper;