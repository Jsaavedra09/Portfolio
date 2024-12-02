/* Js Contacto*/ 

function validarFormulario() {
    /* Obtiene los valores de los campos */
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
    
    /* Valida el correo electrónico */
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    /* Validación de campos vacíos */
    if (!nombre || !correo || !mensaje) {
        alert("Por favor, complete todos los campos.");
        return false;
    }

    /* Validación de correo electrónico */
    if (!emailRegex.test(correo)) {
        alert("Por favor, ingrese una dirección de correo válida.");
        return false;
    }

    /* Funciona :D */
    alert("Formulario enviado correctamente.");
    return true;
}