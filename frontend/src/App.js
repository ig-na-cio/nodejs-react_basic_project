import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MessagesPage from "./pages/MessagesPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <BrowserRouter>
      {/* <MainPage /> */}
      {/* <nav>
        <Link to="/login">Login</Link> |{" "}
        <Link to="/register">Register</Link>
      </nav> */}

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/messages" element={<MessagesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;