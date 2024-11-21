//Ver proyectos
document.addEventListener('DOMContentLoaded', () => {
    const projectContainer = document.getElementById('proyectos');

    fetch('/banco_proyectos/backend/projects.php')
        .then(response => response.json()) // Convertir la respuesta a JSON
        .then(data => {
            console.log('Datos recibidos:', data); // Ver los datos completos en la consola
            if (data.success) {
                const projects = data.data;
                projectContainer.innerHTML = projects.map(project => `
                    <div class="project-card">
                        <h2>${project.nombreProyectos}</h2>
                        <p>${project.descripcionProyectos}</p>
                        <p class="creator"><strong>Creado por:</strong> ${project.nombreUsuario} ${project.apellidoUsuario}</p>
                    </div>
                `).join('');
            } else {
                projectContainer.innerHTML = '<p>No hay proyectos postulados.</p>';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            projectContainer.innerHTML = '<p>Hubo un error al cargar los proyectos.</p>';
        });
});