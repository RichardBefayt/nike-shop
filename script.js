// Déclarations des variables
const menu = document.querySelector("#menu-bar");
const navbar = document.querySelector(".navbar");

const slides = document.querySelectorAll(".slide-container");
let index = 0;

// Fonctions
function next() {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;

    slides[index].classList.add("active");
}

function prev() {
    slides[index].classList.remove("active");
    index = (index - 1 + slides.length) % slides.length;

    slides[index].classList.add("active");
}

// Évènements
menu.addEventListener("click", () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
})

window.addEventListener("scroll", () => {
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
})