
const express = require('express');
const path = require('path');
const controll = require('./src/controllers/listController');
const parser = require('body-parser');
const cors = require('cors'); // Usa require si no estás usando ES modules

const app = express();

// Configuración de CORS para permitir solicitudes desde tu frontend
const allowedOrigins = ['http://localhost:5173'];

app.use(cors({ origin: allowedOrigins, credentials: true }));

app.use(express.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'src/public')));

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/views', 'index.html'));
});

// Usar el controlador
app.use('/', controll);

// Iniciar servidor
app.listen(4800, () => {
    console.log('Server running on http://localhost:4800');
});