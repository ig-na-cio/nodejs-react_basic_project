import MessageList from "../components/MessageList";

function MessagesPage() {
  const userId = localStorage.getItem("userId");

  return (
    <div>
      <h2>Mis mensajes</h2>

      <button>Bien</button>

      <MessageList userId={userId} />
    </div>
  );
}

export default MessagesPage;