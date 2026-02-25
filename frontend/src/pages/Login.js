import { useState } from "react";
import { login } from "../api/auth";
import { useNavigate } from "react-router-dom";
import "./LoginRegister.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const data = await login(email, password);

    if (data.id) {
      sessionStorage.setItem("userId", data.id);
      sessionStorage.setItem("userEmail", data.email);
      navigate("/messages");
    } else {
      alert("Error login");
    }
  }

  return (
    <div className="main-container">
      <div className="main-center">
        
        <div className="main-text">
        <h2>Login</h2>
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

        <button type="submit" className="main-button login-button-in-login">Login</button>
      </form>
      </div>
    </div>
  );
}

export default Login;