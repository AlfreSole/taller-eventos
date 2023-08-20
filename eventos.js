document.addEventListener("DOMContentLoaded", function() {
    const saludarBtn = document.getElementById("saludarBtn");
    const miDiv = document.getElementById("miDiv");
    
    saludarBtn.addEventListener("click", function() {
        alert("¡Hola! ¡Bienvenido!");
    });

    miDiv.addEventListener("click", function(event) {
        if (event.target !== saludarBtn) {
            alert("Hola! Soy el div");
        }
    });
});
