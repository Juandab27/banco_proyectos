// Función de registro
document.getElementById('registerForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const data = {
        action: 'register',
        username: document.getElementById('username').value,
        lastname: document.getElementById('lastname').value,
        cel: document.getElementById('cel').value,
        correo: document.getElementById('correo').value,
        password: document.getElementById('password').value,
    };

    fetch('http://localhost/banco_proyectos/backend/auth.php', { // asegúrate de que esta URL sea correcta
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        if (data.success) {
            alert('Registro exitoso');
            window.location.href = 'login.html';
        } else {
            alert(`Error al registrar: ${data.message}`);
        }
    })
    .catch(error => console.error('Error en el fetch:', error));
});


// Función de inicio de sesión
document.getElementById('loginForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const data = {
        action: 'login',
        correo: document.getElementById('correo').value,
        password: document.getElementById('password').value,
    };

    fetch('/banco_proyectos/backend/login.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        if (data.success) {
            alert('Inicio de sesión exitoso');
            // Redirige al usuario a la página deseada
            window.location.href = 'dashboard.html';
        } else {
            alert(`Error: ${data.message}`);
        }
    })
    .catch(error => console.error('Error en el fetch:', error));
});

//logout
document.addEventListener('DOMContentLoaded', function () {
    const logoutButton = document.getElementById('logoutButton');
    logoutButton.addEventListener('click', function () {
        console.log('Botón de cierre de sesión clickeado'); // Depuración
        const data = { action: 'logout' };

        fetch('/banco_proyectos/backend/login.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Error al comunicarse con el servidor');
                }
                return response.json();
            })
            .then((data) => {
                console.log(data); // Verifica la respuesta
                if (data.success) {
                    alert(data.message); // Mensaje: "Sesión cerrada"
                    window.location.href = 'login.html'; // Redirige al inicio de sesión
                } else {
                    alert('Error al cerrar sesión');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('No se pudo cerrar sesión');
            });
    });
});
