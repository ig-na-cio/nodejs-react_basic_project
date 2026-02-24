import { useState } from "react";
import { register } from "../api/auth";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const data = await register(email, password);

    if (data.id) {
      // Guardamos el userId
      sessionStorage.setItem("userId", data.id);
      sessionStorage.setItem("userEmail", data.email);

      // Redirigimos a la página de mensajes
      navigate("/messages");
    } else {
      alert(data.message || "Error en registro");
    }
  }

  return (
    <div>
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <br />

        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <br />

        <button type="submit">Crear usuario</button>
      </form>
    </div>
  );
}

export default Register;