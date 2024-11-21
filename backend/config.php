<?php
    $host = 'localhost';
    $usuario = 'root'; 
    $contraseña = ''; 
    $base_datos = 'bancodeproyectos';
    $puerto= '3307';

    $conexion = new mysqli($host, $usuario, $contraseña, $base_datos, $puerto);

?>