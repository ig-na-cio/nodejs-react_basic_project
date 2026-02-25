import MessageList from "../components/MessageList";
import MessageTyper from "../components/MessageTyper";
import "./MessagePage.css";

function MessagesPage() {
  const userId = sessionStorage.getItem("userId");
  const userEmail = sessionStorage.getItem("userEmail");
  return (
    <div>
      <h1>Email: {userEmail}</h1>
      {/* <h2>Mis mensajes</h2> */}

      {/* <button>Bien</button> */}
      <div className="page-container">
        <div className="message-list-container">
          <MessageList userId={userId} />
        </div>

        <div className="message-typer-container">
          <MessageTyper userId={userId} />
        </div>
      </div>

      
    </div>
  );
}

export default MessagesPage;