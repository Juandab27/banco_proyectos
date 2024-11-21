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

// Verificar si la acción es "register"
if (isset($data['action']) && $data['action'] === 'register') {
    $nombre = $data['username'];
    $apellido = $data['lastname'];
    $celular = $data['cel'];
    $correo = $data['correo'];
    $contrasenia = $data['password'];

    // Verificar si el correo ya existe
    $stmt = $conexion->prepare("SELECT idUsuario FROM usuario WHERE correoUsuario = ?");
    $stmt->bind_param("s", $correo);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        // El correo ya está registrado
        echo json_encode(['success' => false, 'message' => 'El correo ya está registrado']);
    } else {
        // Encriptar la contraseña
        $contrasenia_hash = password_hash($contrasenia, PASSWORD_DEFAULT);

        // Insertar el nuevo usuario en la base de datos
        $stmt = $conexion->prepare("INSERT INTO usuario (nombreUsuario, apellidoUsuario, celularUsuario, correoUsuario, contraseniaUsuario, rolUsuario) VALUES (?, ?, ?, ?, ?, 0)");
        $stmt->bind_param("sssss", $nombre, $apellido, $celular, $correo, $contrasenia_hash);

        if ($stmt->execute()) {
            // Registro exitoso
            echo json_encode(['success' => true, 'message' => 'Registro exitoso']);
        } else {
            // Error al registrar
            echo json_encode(['success' => false, 'message' => 'Error al registrar']);
        }
    }

    $stmt->close();
    $conexion->close();
} 
else {
    // Responder con error si la solicitud no es válida
    echo json_encode(['success' => false, 'message' => 'Solicitud no válida']);
}
