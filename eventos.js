document.addEventListener("DOMContentLoaded", function() {
    const saludarBtn = document.getElementById("saludarBtn");
    saludarBtn.addEventListener("click", function() {
        alert("¡Hola! ¡Bienvenido!");
    });

    const miDiv = document.getElementById("miDiv");
    miDiv.addEventListener("click", function() {
        alert("Hola! Soy el div");
    });
});