<?php
session_start(); // Inicia la sesión
include 'config.php'; // Conexión a la base de datos

// Habilitar errores para la depuración
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Configurar el encabezado para JSON
header('Content-Type: application/json');

// Leer el contenido JSON de la solicitud
$data = json_decode(file_get_contents('php://input'), true);

// Verificar si la acción es "postular"
if (isset($data['action']) && $data['action'] === 'postular') {
    // Verificar si el usuario está autenticado
    if (isset($_SESSION['user_id'])) {
        $idUsuario = $_SESSION['user_id']; // ID del usuario autenticado
        $nombreProyecto = $data['nameP']; // Nombre del proyecto
        $descripcionProyecto = $data['descripcion']; // Descripción del proyecto

        // Insertar el proyecto en la base de datos
        $stmt = $conexion->prepare("INSERT INTO proyectos (nombreProyectos, descripcionProyectos, idUsuario) VALUES (?, ?, ?)");
        $stmt->bind_param("ssi", $nombreProyecto, $descripcionProyecto, $idUsuario);

        if ($stmt->execute()) {
            // Responder con éxito si el proyecto fue insertado
            echo json_encode(['success' => true, 'message' => 'Proyecto registrado exitosamente']);
        } else {
            // Responder con error si hubo un problema al insertar el proyecto
            echo json_encode(['success' => false, 'message' => 'Error al registrar el proyecto']);
        }

        $stmt->close();
    } else {
        // Responder con error si el usuario no está autenticado
        echo json_encode(['success' => false, 'message' => 'Usuario no autenticado']);
    }

    $conexion->close();
} else {
    // Responder con error si no se recibe una acción "postular"
    echo json_encode(['success' => false, 'message' => 'Acción no válida']);
}
?>