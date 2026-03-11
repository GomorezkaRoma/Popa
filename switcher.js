const Btn = document.getElementById("Btn");
const container = document.querySelector(".container");

Btn.addEventListener ("click", function() {
    container.classList.toggle("shadow");
});