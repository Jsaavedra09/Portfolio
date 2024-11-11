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

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        btntoTop.style.display = "block";
    } else {
        btntoTop.style.display = "none";
    }
}

/* Js Contacto*/ 

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    let isValid = true;
  
    const fields = [
      { id: "nombre", errorId: "error-nombre", message: "Por favor, ingrese su nombre" },
      { id: "email", errorId: "error-email", message: "Por favor, ingrese un email válido" },
      { id: "telefono", errorId: "error-telefono", message: "Por favor, ingrese su teléfono" },
      { id: "mensaje", errorId: "error-mensaje", message: "Por favor, ingrese un mensaje" }
    ];
  
    fields.forEach(field => {
      const input = document.getElementById(field.id);
      const error = document.getElementById(field.errorId);
  
      if (input.value.trim() === "") {
        error.textContent = field.message;
        error.style.display = "block";
        input.style.borderColor = "red";
        isValid = false;
      } else {
        error.style.display = "none";
        input.style.borderColor = "var(--main-color)";
      }
    });
  
    if (isValid) {
      alert("Formulario enviado exitosamente");
      document.getElementById("contactForm").reset();
    }
  });