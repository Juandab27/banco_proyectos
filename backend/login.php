<?php
session_start(); // Inicia la sesión

include 'config.php'; // Aquí se establece la conexión a la base de datos

// Habilitar errores para la depuración
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Configurar el encabezado para JSON
header('Content-Type: application/json');

// Leer el contenido JSON de la solicitud
$data = json_decode(file_get_contents('php://input'), true);

// Verificar si la acción es "login"
if (isset($data['action']) && $data['action'] === 'login') {
    $correo = $data['correo'];
    $contrasenia = $data['password'];

    // Preparar la consulta para verificar el usuario
    $stmt = $conexion->prepare("SELECT idUsuario, contraseniaUsuario FROM usuario WHERE correoUsuario = ?");
    $stmt->bind_param("s", $correo);
    $stmt->execute();
    $stmt->store_result();
    
    if ($stmt->num_rows > 0) {
        // Verificar la contraseña
        $stmt->bind_result($idUsuario, $contrasenia_hash);
        $stmt->fetch();
        
        if (password_verify($contrasenia, $contrasenia_hash)) {
            // Inicio de sesión exitoso
            $_SESSION['user_id'] = $idUsuario; // Guardar el ID del usuario en la sesión

            echo json_encode(['success' => true, 'message' => 'Inicio de sesión exitoso']);
        } else {
            // Contraseña incorrecta
            echo json_encode(['success' => false, 'message' => 'Contraseña incorrecta']);
        }
    } else {
        // Usuario no encontrado
        echo json_encode(['success' => false, 'message' => 'Usuario no encontrado']);
    }

    $stmt->close();
    $conexion->close();
}// Cierre de sesión
elseif (isset($data['action']) && $data['action'] === 'logout') {
    session_unset();
    session_destroy();
    echo json_encode(['success' => true, 'message' => 'Sesión cerrada']);
} 
else {
    // Acción no proporcionada
    echo json_encode(['success' => false, 'message' => 'Acción no válida']);
}
?>
