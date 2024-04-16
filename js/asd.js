document.addEventListener("DOMContentLoaded", function() {
    // Obteniendo referencias a los elementos del DOM
    var txtOmega = document.getElementById("txtOmega");
    var txtAmplitud = document.getElementById("txtAmplitud");
    var txtDensidadLineal = document.getElementById("txtDensidadLineal");
    var txtRapidezOnda = document.getElementById("txtRapidezOnda");
    var txtArea = document.getElementById("txtArea");

    // Declaración de variables
    var omega = 0.0;
    var amplitud = 0.0;
    var densidadLine = 0.0;
    var rapiOnda = 0.0;
    var p = 0.0;

    // Manejador de evento para el botón de cálculo
    document.getElementById("calcularBtn").addEventListener("click", function() {
        // Convirtiendo valores de los campos de texto a números
        omega = parseFloat(txtOmega.value);
        amplitud = parseFloat(txtAmplitud.value);
        densidadLine = parseFloat(txtDensidadLineal.value);
        rapiOnda = parseFloat(txtRapidezOnda.value);

        // Realizando el cálculo
        p = 0.5 * (omega * omega) * (amplitud * amplitud) * densidadLine * rapiOnda;

        // Estableciendo el resultado en el área de texto
        txtArea.textContent = "P = " + p + "\n m";
    });
});