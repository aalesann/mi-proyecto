let suscripciones = []
suscripciones.push(['Manuelita', 'Menganito', 'manuelitacorreo@gmail.com', 'fulanitocorreo@gmail.com'])

function validarCorreo(email) {
    if (email == "") {
        alert("Ingrese un correo.")
        return false;
    }

    let regExp = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (!regExp.test(email)) {
        alert("Correo Incorrecto")
        return false;
    }
    return true;
}

function existeCorreo(email) {
    for (i = 0; i < suscripciones.length; i++) {
        if (suscripciones[i].includes(email) == true) {
            alert("Correo Existente")
            return true;
        }
    }
    
    return false;
}

function respuesta(opcion) {
    if (opcion ==0) {
        document.getElementById("mensaje").value = "Seleccione una opcion valida."
        return false
    } else if (opcion !==0) {
        document.getElementById("mensaje").value = "Opcion guardada."
    }
    return true;
}


function guardarSuscriptor() {
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('e-mail').value;
    let opcion = document.getElementById('encuesta').value;

    if (validarCorreo(email) == true && existeCorreo(email) == false && respuesta(opcion) == true) {
        suscripciones.push([nombre, email, opcion]);
        alert("Gracias por su suscripción.")
    } else alert('Error al suscribirse.')
}