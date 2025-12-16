
document.addEventListener("DOMContentLoaded", function() {

    var imagenes = ["./img/1.png", "./img/2.png","./img/3.png", "./img/4.png"];
    var contenedor = document.getElementById("contenedorElementos");
    var inputColor = document.getElementById("colorPicker");


    function cargarInicio() {
        contenedor.innerHTML = "";
        for (var i = 0; i < 4; i++) {
            crearElemento(inputColor.value, imagenes[0]);
        }
    }

 
    function crearElemento(color, imagen) {

        var html = `
        <div class="elemento">
            <div class="imagen-wrap" style="background-color: ${color};">
                <img class="foto" src="${imagen}" width="100">
            </div>
            <button type="button" class="btnCambiar">Cambiar</button>
            <button type="button" class="btnBorrar">Borrar</button>
        </div>
        `;

        contenedor.insertAdjacentHTML('beforeend', html);
    }
    cargarInicio();

    document.getElementById("btnCambiarColor").addEventListener("click", function() {
        var color = inputColor.value;
        

        document.body.style.backgroundColor = color;

        var recuadros = document.querySelectorAll(".imagen-wrap");
        for(var i=0; i < recuadros.length; i++) {
            recuadros[i].style.backgroundColor = color;
        }
    });


    document.getElementById("btnAnadir").addEventListener("click", function() {
        var color = inputColor.value;
        var aleatorio = Math.floor(Math.random() * imagenes.length);
        var imagenNueva = imagenes[aleatorio];
        
        crearElemento(color, imagenNueva);
    });


    document.getElementById("btnReset").addEventListener("click", function() {

        inputColor.value = "#808080";
        document.body.style.backgroundColor = "";

        cargarInicio();
    });

    contenedor.addEventListener("click", function(evento) {

        if (evento.target.classList.contains("btnBorrar")) {
            evento.target.parentElement.remove();
        }

        if (evento.target.classList.contains("btnCambiar")) {
            var aleatorio = Math.floor(Math.random() * imagenes.length);
            var nuevaFoto = imagenes[aleatorio];

            evento.target.parentElement.querySelector(".foto").src = nuevaFoto;
        }
    });

});