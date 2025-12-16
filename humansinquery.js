document.addEventListener("DOMContentLoaded", function() {


    var tablero = document.getElementById("tablero");
    var titulo = document.getElementById("titulo");
    var subtitulo = document.getElementById("subtitulo");

    var estado = "inicio"; 
    var tiempoInicio = 0;
    var timerID = null; 

    function cambiarEstado(nuevoEstado, texto1, texto2, colorFondo) {
        estado = nuevoEstado;
        titulo.innerText = texto1;
        subtitulo.innerText = texto2;
        tablero.style.backgroundColor = colorFondo;
    }

    tablero.addEventListener("click", function() {
        
        if (estado === "inicio" || estado === "resultado") {
            
            cambiarEstado("esperando", "Espera...", "No hagas click todavía", "#ce2636");
            
            var tiempoAleatorio = Math.floor(Math.random() * 3000) + 2000;
            timerID = setTimeout(function() {
            
                cambiarEstado("click", "¡CLICK!", "Haz click ahora", "#4bdb6a");
            
                tiempoInicio = Date.now();

            }, tiempoAleatorio);
        }

       
        else if (estado === "esperando") {
            clearTimeout(timerID); 
            cambiarEstado("resultado", "¡Muy rápido!", "Has hecho click antes de tiempo. Inténtalo de nuevo.", "#2b87d1");
        }

        else if (estado === "click") {
            var tiempoFinal = Date.now();
            var diferencia = tiempoFinal - tiempoInicio; 

            cambiarEstado("resultado", diferencia + " ms", "Click para guardar puntuación (simulado) e intentar de nuevo", "#2b87d1");
        }
        
    });

});