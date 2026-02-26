# 📚 Banco de Proyectos

El **Banco de Proyectos** es una plataforma web desarrollada para facilitar la postulación y gestión de proyectos universitarios.

Su objetivo es simplificar tanto la presentación de nuevas ideas como la exploración de proyectos existentes, fomentando la colaboración entre estudiantes y docentes.

La plataforma permite:

* Registrar nuevos proyectos
* Explorar propuestas existentes
* Postular ideas innovadoras
* Promover el trabajo colaborativo
* Impulsar iniciativas académicas y de investigación

Es un espacio diseñado para fortalecer el intercambio de conocimientos y generar impacto positivo en el entorno académico.

---

# 🚀 Tecnologías Utilizadas

* PHP
* MySQL
* HTML5
* CSS3
* JavaScript
* XAMPP (entorno de desarrollo local)

---

# ⚙️ Instalación

## 📌 Requisitos Previos

Antes de comenzar, asegúrate de tener:

* XAMPP o un servidor con soporte para PHP
* Acceso a MySQL
* Un editor de código

---

## 🛠 Pasos para Instalar

### 1️⃣ Clonar el repositorio

```
git clone https://github.com/Juandab27/banco_proyectos.git
```

### 2️⃣ Mover el proyecto

Si usas XAMPP, coloca la carpeta del proyecto dentro de:

```
htdocs
```

### 3️⃣ Configurar la base de datos

1. Abre **phpMyAdmin**
2. Crea una nueva base de datos
3. Importa el archivo `bancoProyectos.sql`
4. Configura las credenciales en el archivo `config.php`:

```php
$host = 'localhost';
$usuario = 'tu_usuario';
$contraseña = 'tu_contraseña';
$base_datos = 'nombre_bd';
$puerto = 'tu_puerto';

$conexion = new mysqli($host, $usuario, $contraseña, $base_datos, $puerto);
```

### 4️⃣ Ejecutar el proyecto

Abre tu navegador y accede a:

```
http://localhost/nombre_del_proyecto
```

---

# 🖥 Uso del Sistema

1. Regístrate con tus datos.
2. Inicia sesión.
3. Visualiza los proyectos almacenados.
4. Postula nuevas ideas.
5. Consulta los proyectos publicados.

---

# 👨‍💻 Autor

Proyecto académico desarrollado como parte de la formación universitaria.

**Juan David Bermúdez**

Responsable del análisis, diseño e implementación completa del sistema, incluyendo:

* Desarrollo del backend en PHP
* Diseño de la base de datos en MySQL
* Implementación del frontend (HTML, CSS y JavaScript)
* Integración y pruebas del sistema

---
