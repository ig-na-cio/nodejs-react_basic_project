import { useState } from "react";
import { register } from "../api/auth";
import { useNavigate } from "react-router-dom";
import "./LoginRegister.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmed, setPasswordConfirmed] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== passwordConfirmed) {
      alert("Las contraseñas no coinciden");
      return;
    }

    const data = await register(email, password);

    if (data.id) {
      sessionStorage.setItem("userId", data.id);
      sessionStorage.setItem("userEmail", data.email);

      navigate("/messages");
    } else {
      alert(data.message || "Error en registro");
    }
  }

  return (
    <div className="main-container">
      <div className="main-center">
        
        <div className="main-text">
          <h2>Register</h2>
        </div>
      
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

        <input
          type="password"
          placeholder="Confirm password"
          value={passwordConfirmed}
          onChange={e => setPasswordConfirmed(e.target.value)}
        />
        <br />

        <button className="main-button register-button-in-register" type="submit">Register</button>
      </form>
      </div>
    </div>
  );
}

export default Register;