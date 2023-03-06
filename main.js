// Inicio

const nombreyApellido = document.getElementById ("nombreyApellido");
const email = document.getElementById ("email");
const asunto = document.getElementById ("asunto");
const mensaje = document.getElementById("mensaje");
const botonEnviarFormulario = document.getElementById ("botonEnviarFormulario");

function revisarDatos () {

    // Con esta Primera validacion evitamos que la pagina se actualice al enviar el formulario.
    window.event.preventDefault()

    // Validaciones de Nombre y Apellido 

    if (nombreyApellido == "" || nombreyApellido.value.length > 50) {

        alert ("Debe ingresar nombre y apellido valido");

    }

    // Validaciones de Correo Electronico 

    else if (email == "") {

        alert ("Debe ingresar correo electronico valido");

    }

    else if (email.indexOf ("@") == -1 || email.indexOf (".") == -1 ) {

        alert ("Debe ingresar correo electronico valido");

    }

    // Validaciones de Asunto

    else if (asunto == "" || asunto.length < 50) {

        alert ("Debe ingresar un mensaje valido");
    
    }



}

botonEnviarFormulario.addEventListener ("click", revisarDatos);

// V-1.0.0
// Fin