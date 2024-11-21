-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3307
-- Tiempo de generación: 21-11-2024 a las 17:27:28
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bancodeproyectos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estado`
--

CREATE TABLE `estado` (
  `idEstado` int(11) NOT NULL,
  `nombreEstado` varchar(45) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `estado`
--

INSERT INTO `estado` (`idEstado`, `nombreEstado`) VALUES
(1, 'En revisión'),
(2, 'Aprobado'),
(3, 'Desaprobado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `postulaciones`
--

CREATE TABLE `postulaciones` (
  `idPostulaciones` int(11) NOT NULL,
  `idUsuario` int(11) NOT NULL,
  `proyecto_id` int(11) NOT NULL,
  `comentario` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `idEstado` int(11) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proyectos`
--

CREATE TABLE `proyectos` (
  `idProyectos` int(11) NOT NULL,
  `nombreProyectos` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `descripcionProyectos` varchar(1000) NOT NULL,
  `idUsuario` int(11) NOT NULL,
  `idEstado` int(11) NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `proyectos`
--

INSERT INTO `proyectos` (`idProyectos`, `nombreProyectos`, `descripcionProyectos`, `idUsuario`, `idEstado`) VALUES
(1, 'Campus Verde', 'Campus Verde es una aplicacion diseñada para promover la sostenibilidad ambiental dentro de la universidad. ', 1, 2),
(2, 'RedUni', 'Una red social interna para estudiantes y docentes. Fomenta la interacción mediante grupos temáticos, mensajería privada y tableros de anuncios. Incluye secciones para compartir recursos, publicar eventos y encontrar compañeros de estudio o proyectos.', 2, 2),
(3, 'CanchaFácil', 'Sistema para gestionar el préstamo y reserva de canchas deportivas dentro del campus. Permite consultar disponibilidad, realizar reservas en línea y gestionar materiales deportivos. Incluye recordatorios automáticos, estadísticas de uso y un espacio para organizar torneos o eventos deportivos. Mejora la organización y optimiza el uso de las instalaciones.', 4, 2),
(4, 'Conectados por la Educación', 'Una iniciativa que tiene como objetivo brindar tutorías y talleres de refuerzo escolar a niños y jóvenes de escasos recursos en la comunidad.', 3, 2),
(31, 'Prototek', 'Plataforma para la gestión de prototipos y laboratorios. Permite reservar equipos, llevar un inventario de materiales y registrar proyectos experimentales. Ofrece seguimiento del uso de los laboratorios, optimizando su disponibilidad.', 5, 2),
(32, 'EventHub', 'Gestor de eventos académicos y culturales. Facilita la organización de conferencias, talleres y actividades extracurriculares, permitiendo el registro en línea, notificaciones y evaluación de asistentes. Incrementa la participación en la vida universitaria.', 4, 2),
(33, 'JobConnect', 'Portal para vinculación laboral. Ofrece a los estudiantes acceso a vacantes, prácticas profesionales y asesoramiento para crear currículums. Las empresas pueden publicar ofertas y buscar talento universitario.', 1, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `idUsuario` int(11) NOT NULL,
  `nombreUsuario` varchar(45) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `apellidoUsuario` varchar(45) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `celularUsuario` varchar(10) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `correoUsuario` varchar(80) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `contraseniaUsuario` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `rolUsuario` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`idUsuario`, `nombreUsuario`, `apellidoUsuario`, `celularUsuario`, `correoUsuario`, `contraseniaUsuario`, `rolUsuario`) VALUES
(1, 'Juan David', 'Bermudez', '3163286878', 'juan3.bermudez@ucp.edu.co', '$2y$10$Bt.wjO8twRWemRT2WPNbe..YHltDyrvLXSk3hJPz9Ztb9KKWeMe2u', 1),
(2, 'Santiago', 'Moncada', '3154305612', 'santiago.moncada@ucp.edu.co', '$2y$10$vsRwrKfSDQD2bTb.lZB5/.OT4QBw57dCyRMsciCqtmfqCgXC7lsJ2', 0),
(3, 'Miguel', 'Barrios', '3143545264', 'miguel.barrios@ucp.edu.co', '$2y$10$m0jCwqU9ADO/oFDDjlPkpel5OZCqmEfA21uuPhb2uPfdpTYv72p/m', 0),
(4, 'Lucas', 'Perez', '3176576890', 'perezl@gmail.com', '$2y$10$5K47aPmNQfJ34djr/jR/S.dMtmQvqBNAbn16BQ1CIg7UVR/r3MRJm', 0),
(5, 'Andrea', 'Rodriguez', '3176576452', 'andre@gmail.com', '$2y$10$OI1xa1KNzOkQt0vHhOuc0.RkTEKbtqerrctWgTeRYrQbwkK9Siy2y', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `estado`
--
ALTER TABLE `estado`
  ADD PRIMARY KEY (`idEstado`);

--
-- Indices de la tabla `postulaciones`
--
ALTER TABLE `postulaciones`
  ADD PRIMARY KEY (`idPostulaciones`),
  ADD KEY `idUsuario` (`idUsuario`),
  ADD KEY `proyecto_id` (`proyecto_id`),
  ADD KEY `idEstado` (`idEstado`);

--
-- Indices de la tabla `proyectos`
--
ALTER TABLE `proyectos`
  ADD PRIMARY KEY (`idProyectos`),
  ADD KEY `idUsuario` (`idUsuario`),
  ADD KEY `idEstado` (`idEstado`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`idUsuario`),
  ADD UNIQUE KEY `correoUsuario` (`correoUsuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `estado`
--
ALTER TABLE `estado`
  MODIFY `idEstado` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `postulaciones`
--
ALTER TABLE `postulaciones`
  MODIFY `idPostulaciones` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `proyectos`
--
ALTER TABLE `proyectos`
  MODIFY `idProyectos` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `postulaciones`
--
ALTER TABLE `postulaciones`
  ADD CONSTRAINT `postulaciones_ibfk_1` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`idUsuario`),
  ADD CONSTRAINT `postulaciones_ibfk_2` FOREIGN KEY (`proyecto_id`) REFERENCES `proyectos` (`idProyectos`),
  ADD CONSTRAINT `postulaciones_ibfk_3` FOREIGN KEY (`idEstado`) REFERENCES `estado` (`idEstado`);

--
-- Filtros para la tabla `proyectos`
--
ALTER TABLE `proyectos`
  ADD CONSTRAINT `proyectos_ibfk_1` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`idUsuario`),
  ADD CONSTRAINT `proyectos_ibfk_2` FOREIGN KEY (`idEstado`) REFERENCES `estado` (`idEstado`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
