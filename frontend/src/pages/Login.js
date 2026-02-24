import { useState } from "react";
import { login } from "../api/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const data = await login(email, password);

    if (data.id) {
      localStorage.setItem("userId", data.id);
      localStorage.setItem("userEmail", data.email);
      navigate("/messages");
    } else {
      alert("Error login");
    }
  }

  return (
    <div>
      <h2>Login</h2>

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

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;