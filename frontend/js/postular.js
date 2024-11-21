//Postular proyectos
document.getElementById('postuForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log("Formulario enviado"); // Verificar si el formulario se está enviando
    
    const data = {
        action: 'postular',
        nameP: document.getElementById('nameP').value,
        descripcion: document.getElementById('descripcion').value,
    };

    fetch('http://localhost/banco_proyectos/backend/postular.php', {
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
            alert('Proyecto postulado exitosamente.');
            document.getElementById('postuForm').reset();
            window.location.href = 'dashboard.html';
        } else {
            alert(`Error al postular: ${data.message}`);
        }
    })
    .catch(error => console.error('Error en el fetch:', error));
});
