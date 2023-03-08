// Inicio

// Comenzamos declarando variables del DOM. Especificamente elementos del formulario.

const formulario_contacto = document.getElementById ("formulario_contacto");
const nombreYApellido = document.getElementById ("nombreYApellido");
const correoElectronico = document.getElementById ("correoElectronico");
const asunto = document.getElementById ("asunto");
const mensaje = document.getElementById ("mensaje");
const botonEnviarFormulario = document.getElementById ("botonEnviarFormulario");

// Usaremos la siguiente función para validar ciertos requisitos para los diferentes inputs y el textarea. 

function revisarFormulario () {

    if (nombreYApellido.value == "" || nombreYApellido.value.lenght > 50) {

        alert ("Por favor ingrese un nombre y apellido validos.");

    }

    else if (correoElectronico.value == "" || correoElectronico.value.indexOf ("@") == -1 || correoElectronico.value.indexOf (".") == -1) {

        alert ("Por favor ingrese un correo electronico valido.");

    }

    else if (asunto.value == "" || asunto.value.lenght < 50) {

        alert ("Por favor ingrese un asunto valido.");

    }

    else if (mensaje.value == "" || mensaje.value.lenght > 300) {

        alert ("El mensaje no puede estar vacio ni sus caracteres superar los 300, por favor ingrese un mensaje valido.");

    }

    else {

        alert ("Formulario Enviado Correctamente");

    }

}

// V-1.0.0 - Julio Reyes - 06MAR2023.
// V-1.1.0 - Julio Reyes - 07MAR2023. 

// Fin 