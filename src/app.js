const PORT = 3002;

// 1) Importar tanto el framework Express y path.
const express = require('express');
const path = require('path');
const mainRouter = require('./routes/main-router');

// 2) Crear una instancia de Express.
const app = express();

app.use(express.static(path.join(__dirname, "../public")));

// 3) Poner al servidor a escuchar al puerto 3001.
app.listen(PORT, () => console.log('Se prendió en el puerto ' + PORT));

app.use(mainRouter);

