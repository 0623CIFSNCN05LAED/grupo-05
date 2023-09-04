const PORT = 3002;

// 1) Importar tanto el framework Express y path.
const express = require('express');
const path = require('path');

// 2) Crear una instancia de Express.
const app = express();

app.use(express.static(path.join(__dirname, "../public")));

// 3) Poner al servidor a escuchar al puerto 3001.
app.listen(PORT, () => console.log('Se prendió en el puerto ' + PORT));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'));
})

app.get('/index', (req,res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'));
})
app.get('/register', (req,res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'));
})
app.get('/login', (req,res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'));
})
app.get('/productcart', (req,res) => {
    res.sendFile(path.join(__dirname, '/views/productcart.html'));
})
app.get('/productdetail', (req,res) => {
    res.sendFile(path.join(__dirname, '/views/productdetail.html'));
})

