import { useState } from "react";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const navigate = useNavigate();


  return (
    <div>
      <h1>Bienvenido a la aplicación de mensajes</h1>
      <p>Por favor, inicia sesión o regístrate para continuar.</p>
      <button onClick={() => navigate("/login")}>Login</button>
      <button onClick={() => navigate("/register")}>Register</button>
    </div>
  );
}

export default MainPage;