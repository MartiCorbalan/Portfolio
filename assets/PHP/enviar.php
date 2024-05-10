<?php
// Recuperar los datos del formulario
$nombre = $_POST['name'];
$email = $_POST['email'];
$mensaje = $_POST['message'];

// Dirección de correo electrónico a la que se enviará el mensaje
$para = 'martilluc01@gmail.com';

// Asunto del mensaje
$asunto = 'Mensaje de contacto desde tu sitio web';

// Construir el cuerpo del mensaje
$cuerpoMensaje = "Nombre: $nombre\n";
$cuerpoMensaje .= "Correo electrónico: $email\n";
$cuerpoMensaje .= "Mensaje:\n$mensaje\n";

// Cabeceras del correo electrónico
$cabeceras = 'From: ' . $email . "\r\n" .
             'Reply-To: ' . $email . "\r\n";

// Enviar el correo electrónico
mail($para, $asunto, $cuerpoMensaje, $cabeceras);

// Redireccionar de vuelta a la página de contacto
header('Location: contacto.html');
?>
