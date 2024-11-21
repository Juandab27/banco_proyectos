// Función para postular proyectos
document.getElementById('postuForm')?.addEventListener('submit', function (e) {
    e.preventDefault(); 
    console.log("Formulario enviado");
    
    // Datos del proyecto que se van a enviar al backend
    const data = {
        action: 'postular', // Acción que identifica que se trata de un registro de un nuevo proyecto.
        nameP: document.getElementById('nameP').value,
        descripcion: document.getElementById('descripcion').value,
    };

    // Realiza una solicitud POST al backend
    fetch('http://localhost/banco_proyectos/backend/postular.php', { 
        method: 'POST', // Usa el método POST para enviar los datos.
        headers: {
            'Content-Type': 'application/json' // Indica que estamos enviando datos en formato JSON.
        },
        body: JSON.stringify(data) // Convierte el objeto `data` a formato JSON y lo enviamos en el cuerpo de la solicitud.
    })
    .then(response => {
        // Verifica si la respuesta del servidor fue exitosa
        if (!response.ok) { 
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Convierte la respuesta en formato JSON.
    })
    .then(data => {
        if (data.success) { // Si el backend responde con éxito.
            alert('Proyecto postulado exitosamente.'); // Muestra un mensaje de éxito.
            document.getElementById('postuForm').reset(); // Limpia los campos del formulario.
            window.location.href = 'dashboard.html'; 
        } else {
            alert(`Error al postular: ${data.message}`); 
        }
    })
    .catch(error => console.error('Error en el fetch:', error)); 
});
