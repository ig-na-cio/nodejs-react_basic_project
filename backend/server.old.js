// Importamos express
// Podemos encontrar require o import para importar modulos
const express = require("express");
const cors = require("cors");

// Creamos la app
const app = express();

// Definimos puerto
const PORT = 5000;

app.use(cors());

// Creamos un endpoint GET
// Arrow function:
// (req, res) => { }
// Es lo mismo que:
// function(req, res) { }
app.get("/api/saludo", (req, res) => {
    res.json({ mensaje: "Hola desde el backend" });
});

// Levantamos servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
