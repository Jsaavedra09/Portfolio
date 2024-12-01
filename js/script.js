/* Menu Hamburguesa*/

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})


/* Botoncito para ir arriba*/ 

window.addEventListener("scroll", () => {
    scrollFunction()
})
document.addEventListener('DOMContentLoaded', () => {
    const btntoTop = document.getElementById("btntoTop");
    scrollFunction()
    btntoTop.addEventListener('click', () => { toTop() })
})

function toTop() {
    console.log('funciona')
    window.scrollTo(0, 0);
}

// Determina la distancia que bajaste para mostrar o no el boton para subir
function scrollFunction() {
    if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
        btntoTop.style.display = "block";
    } else {
        btntoTop.style.display = "none";
    }
}

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