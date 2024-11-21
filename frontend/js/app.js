// Función de registro
document.getElementById('registerForm')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const data = {
        action: 'register', // Acción para identificar el registro en el backend.
        username: document.getElementById('username').value, 
        lastname: document.getElementById('lastname').value, 
        cel: document.getElementById('cel').value, 
        correo: document.getElementById('correo').value,
        password: document.getElementById('password').value, 
    };

    fetch('http://localhost/banco_proyectos/backend/auth.php', { // Realiza la solicitud al backend.
        method: 'POST', // Método POST para enviar datos.
        headers: {
            'Content-Type': 'application/json' // Define que los datos se envían como JSON.
        },
        body: JSON.stringify(data) // Convierte el objeto `data` a una cadena JSON para enviarlo.
    })
    .then(response => {
        if (!response.ok) { // Verifica si la respuesta HTTP no fue exitosa.
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Convierte la respuesta en JSON.
    })
    .then(data => {
        if (data.success) { // Si el registro fue exitoso.
            alert('Registro exitoso'); // Notifica al usuario.
            window.location.href = 'login.html'; 
        } else {
            alert(`Error al registrar: ${data.message}`); // Muestra un mensaje de error si ocurrió algo en el backend.
        }
    })
    .catch(error => console.error('Error en el fetch:', error)); 
});

// Función de inicio de sesión
document.getElementById('loginForm')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const data = {
        action: 'login', // Acción para identificar el inicio de sesión en el backend.
        correo: document.getElementById('correo').value,
        password: document.getElementById('password').value,
    };

    fetch('/banco_proyectos/backend/login.php', { // Realiza la solicitud al backend.
        method: 'POST', // Método POST para enviar los datos.
        headers: {
            'Content-Type': 'application/json' // Indica que los datos se envían en formato JSON.
        },
        body: JSON.stringify(data) // Envía los datos como JSON.
    })
    .then(response => {
        if (!response.ok) { 
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Convierte la respuesta a JSON.
    })
    .then(data => {
        if (data.success) { // Si el inicio de sesión fue exitoso.
            alert('Inicio de sesión exitoso'); 
            window.location.href = 'dashboard.html'; 
        } else {
            alert(`Error: ${data.message}`); // Muestra un mensaje de error del backend.
        }
    })
    .catch(error => console.error('Error en el fetch:', error)); 
})

// Función de cierre de sesión
document.addEventListener('DOMContentLoaded', function () { 
    document.getElementById('logoutButton').addEventListener('click', function () {
        const data = { action: 'logout' }; // Acción para identificar el cierre de sesión en el backend.

        fetch('/banco_proyectos/backend/login.php', { // Realiza la solicitud de cierre de sesión.
            method: 'POST', // Método POST para enviar datos.
            headers: {
                'Content-Type': 'application/json' // Indica que los datos se envían como JSON.
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al comunicarse con el servidor');
            }
            return response.json(); // Convierte la respuesta a JSON.
        })
        .then(data => {
            if (data.success) { // Si el cierre de sesión fue exitoso.
                alert(data.message);
                window.location.href = 'login.html'; 
            } else {
                alert('Error al cerrar sesión'); // Muestra un mensaje de error si ocurrió algo en el backend.
            }
        })
        .catch(error => {
            console.error('Error:', error); 
            alert('No se pudo cerrar sesión'); 
        });
    });
});
