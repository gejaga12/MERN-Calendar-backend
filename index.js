const express = require('express');
require('dotenv').config();

// CREAR EL SERVIDOR DE EXPRESS
const app = express();

// DIRECTORIO PUBLICO
app.use(express.static('public'));



// RUTAS
app.use( '/api/auth', require('./routes/auth') );

// LECTURA Y PARSEO DEL BODY
app.use(express.json());

// TODO : CRUD : Eventos

// ESCUCHAR PETICIONES
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT} `);
})