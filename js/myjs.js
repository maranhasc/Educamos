// Variables globales
var slideIndex = 1
// Ejecutamos cuando el DOM está ya en memoria
document.addEventListener("DOMContentLoaded", function (e) {
    console.log("ready...")
    showSlide(slideIndex);
});
// Slides Control
function nextSlide() {
    slideIndex += 1;
    showSlide(slideIndex);
}
function prevSlide() {
    slideIndex -= 1;
    showSlide(slideIndex);
}
function showSlide(n) {
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}