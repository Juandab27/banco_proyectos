<?php
include 'config.php'; // Conexión a la base de datos

header('Content-Type: application/json');

// Obtener los proyectos desde la base de datos
$query = "SELECT p.nombreProyectos, p.descripcionProyectos, u.nombreUsuario, u.apellidoUsuario
        FROM proyectos p
        INNER JOIN usuario u ON p.idUsuario = u.idUsuario"; // Asegúrate de ajustar los nombres de las tablas y campos

$result = $conexion->query($query);

$proyectos = [];

if ($result->num_rows > 0) {
    // Recoger los datos de los proyectos
    while ($row = $result->fetch_assoc()) {
        $proyectos[] = [
            'nombreProyectos' => $row['nombreProyectos'],
            'descripcionProyectos' => $row['descripcionProyectos'],
            'nombreUsuario' => $row['nombreUsuario'], // El nombre del usuario que creó el proyecto
            'apellidoUsuario' => $row['apellidoUsuario']
        ];
    }

    echo json_encode(['success' => true, 'data' => $proyectos]);
} else {
    echo json_encode(['success' => false, 'message' => 'No hay proyectos registrados']);
}

$conexion->close();
?>
