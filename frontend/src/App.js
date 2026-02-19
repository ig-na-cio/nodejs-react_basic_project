import { useEffect, useState } from "react";

function App() {
  const [mensaje, setMensaje] = useState("");

  // Use effect se ejecuta una vez al montar el componente
  useEffect(() => {
    fetch("http://localhost:5000/api/saludo")
      .then(res => res.json())
      .then(data => setMensaje(data.mensaje));
  }, []);

  return (
    <div>
      <h1>Mensaje del backend:</h1>
      <p>{mensaje}</p>
    </div>
  );
}

export default App;
