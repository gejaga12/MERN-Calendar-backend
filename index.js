require('dotenv').config();
const express = require('express');
const { dbConnection } = require('./database/config')

// CREAR EL SERVIDOR DE EXPRESS
const app = express();

// BASE DE DATOS
dbConnection();

// DIRECTORIO PUBLICO
app.use(express.static('public'));

// LECTURA Y PARSEO DEL BODY
app.use(express.json());

// RUTAS
app.use('/api/auth', require('./routes/auth'));

// TODO : CRUD : Eventos

// ESCUCHAR PETICIONES
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT} `);
})