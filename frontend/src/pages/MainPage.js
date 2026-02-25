import { useNavigate } from "react-router-dom";
import "./MainPage.css";

function MainPage() {
  const navigate = useNavigate();


  return (
    <div className="main-container">
      <div className="main-left">
        <h1>Bienvenido a la aplicación de mensajes</h1>
        <p>Por favor, inicia sesión o regístrate para continuar.</p>
      </div>

      <div className="main-right">
        <button
          className="main-button login-button"
          onClick={() => navigate("/login")}
        >
          Login
        </button>

        <button
          className="main-button register-button"
          onClick={() => navigate("/register")}
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default MainPage;