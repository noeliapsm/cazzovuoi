document.getElementById('signinForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Envía los datos del formulario al servidor para iniciar sesión
    const response = await fetch('http://localhost:3000/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });

    if (response.ok) {
        alert('Signed in successfully!');
        window.location.href = 'loading.html'; // Redirige al usuario a la página de carga
    } else {
        alert('Error signing in. Please try again.');
    }
});
