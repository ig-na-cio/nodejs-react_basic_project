import MessageList from "../components/MessageList";
import MessageTyper from "../components/MessageTyper";

function MessagesPage() {
  const userId = localStorage.getItem("userId");
  const userEmail = localStorage.getItem("userEmail");
  return (
    <div>
      <h1>Email: {userEmail}</h1>
      <h2>Mis mensajes</h2>

      <button>Bien</button>

      <MessageList userId={userId} />

      <MessageTyper userId={userId} />
    </div>
  );
}

export default MessagesPage;