const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public')); // Sirve los archivos estáticos desde la carpeta 'public'

// Ruta para manejar el registro de usuarios
app.post('/signup', (req, res) => {
    const { username, password, email, birthdate } = req.body;
    console.log('Received registration data:', { username, password, email, birthdate });
    // Aquí deberías agregar la lógica para guardar los datos del usuario en una base de datos
    // Una vez guardados los datos, redirige al usuario a la página principal
    res.redirect('/loading.html'); // Redirige al usuario a la página de carga
});

// Ruta para manejar el inicio de sesión de usuarios
app.post('/signin', (req, res) => {
    const { username, password } = req.body;
    console.log('Received login data:', { username, password });
    // Aquí deberías agregar la lógica para autenticar al usuario
    // Una vez autenticado, redirige al usuario a la página principal
    res.redirect('/loading.html'); // Redirige al usuario a la página de carga
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
