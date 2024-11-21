// Función para cargar y mostrar proyectos
document.addEventListener('DOMContentLoaded', () => {
    // Obtiene el contenedor donde se van a mostrar los proyectos
    const projectContainer = document.getElementById('proyectos');

    // Realiza una solicitud GET al backend para obtener los proyectos
    fetch('/banco_proyectos/backend/projects.php')
        .then(response => response.json()) // Convierte la respuesta en formato JSON
        .then(data => {
            console.log('Datos recibidos:', data); 
            if (data.success) { // Si la respuesta indica éxito
                const projects = data.data; // Obtiene la lista de proyectos desde `data.data`
                
                // Muestra los proyectos dentro del contenedor
                projectContainer.innerHTML = projects.map(project => `
                    <div class="project-card">
                        <h2>${project.nombreProyectos}</h2>
                        <p>${project.descripcionProyectos}</p>
                        <p class="creator"><strong>Creado por:</strong> ${project.nombreUsuario} ${project.apellidoUsuario}</p> 
                    </div>
                `).join(''); // Une todos los elementos de proyecto en un solo string de HTML
            } else {
                // Si no hay proyectos, muestra un mensaje alternativo
                projectContainer.innerHTML = '<p>No hay proyectos postulados.</p>';
            }
        })
        .catch(error => {
            // En caso de error en la solicitud o en el procesamiento
            console.error('Error:', error); // Muestra el error en la consola
            projectContainer.innerHTML = '<p>Hubo un error al cargar los proyectos.</p>';
        });
});
