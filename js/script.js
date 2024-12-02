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

/* Determina la distancia para mostrar o no el boton para subir */
function scrollFunction() {
    if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
        btntoTop.style.display = "block";
    } else {
        btntoTop.style.display = "none";
    }
}

