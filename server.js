const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public')); // Asegúrate de que los archivos estáticos se sirvan correctamente

app.post('/signup', (req, res) => {
   
