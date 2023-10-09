document.addEventListener("DOMContentLoaded", function () {
    const mensaje = document.getElementById("mensaje");

    // Muestra el mensaje
    mensaje.style.display = "block";

    // Cierra el mensaje después de 5 segundos
    setTimeout(function () {
        mensaje.style.display = "none";
    }, 3000);
});