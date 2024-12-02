/* Js Contacto*/ 

function validarFormulario() {
    // Obtener los valores de los campos
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
    
    // Expresión regular para validar el correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validación de campos vacíos
    if (!nombre || !correo || !mensaje) {
        alert("Por favor, complete todos los campos.");
        return false;
    }

    // Validación de correo electrónico
    if (!emailRegex.test(correo)) {
        alert("Por favor, ingrese una dirección de correo válida.");
        return false;
    }

    // Si todo está bien, se puede enviar el formulario
    alert("Formulario enviado correctamente.");
    return true;
}