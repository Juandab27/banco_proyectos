# Banco de Proyectos

El Banco de Proyectos es una plataforma web creada para ayudar en la postulación de proyectos universitarios. Su objetivo es hacer más fácil tanto la postulación de nuevos proyectos como la recopilación de ideas para desarrollarlos. Está dirigida a estudiantes y profesores que quieren compartir ideas innovadoras, colaborativas y de investigación. Con esta plataforma, los usuarios pueden registrar sus proyectos, explorar los de otros y trabajar juntos para hacer realidad nuevas propuestas. Es un espacio donde se fomenta la colaboración y el intercambio de conocimientos para crear soluciones que puedan tener un impacto positivo en el ámbito académico.

## Tecnologías Utilizadas

- PHP
- MySQL
- HTML/CSS
- JavaScript
- XAMPP (para el entorno local)

## Instalación

Para la instalación debemos tener lo siguiente:

## Requisitos previos

- Tener XAMPP o un servidor PHP instalado.
- Tener acceso a una base de datos MySQL.
- Tener un editor de código.

## Pasos para instalar

1. Clona el repositorio:
    
    git clone https://github.com/Juandab27/banco_proyectos.git
    

2. Coloca el proyecto en la carpeta `htdocs` si usas XAMPP.

3. Configura la base de datos:
   - Abre `phpmyadmin`.
   - Crea una nueva base de datos.
   - Importa el archivo `.sql` que contiene la estructura de la base de datos `bancoProyectos.sql`

4. Configura las credenciales de la base de datos en el archivo `config.php`.
El archivo debe tener esta estructura:
    
    $host = 'localhost';
    $usuario = 'tu_usuario'; 
    $contraseña = 'tu_contraseña'; 
    $base_datos = 'nombre_bd';
    $puerto= 'tu_puerto';

    $conexion = new mysqli($host, $usuario, $contraseña, $base_datos, $puerto);

5. Abre el navegador y accede a `http://localhost/nombre_del_proyecto`.

## Uso

Para utilizarlo lo recomendable es primero registrarse, con tus datos y luego iniciar sesion, luego de iniciar sesion se mostrarán los proyectos que están almacenados en la base de datos, de igual forma se podrán postular más proyectos.

## Ejemplo de uso

1. Registrate con tus credenciales.
2. Inicia sesión en el sistema con tus credenciales.
3. Visualiza los proyectos.
4. Agrega proyectos y postúlalos.
5. Visualiza los proyectos postulados.
