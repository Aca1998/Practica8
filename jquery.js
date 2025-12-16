$(document).ready(function () {

    var listaImagenes = [
          "./img/1.png", 
          "./img/2.png", 
          "./img/3.png", 
          "./img/4.png"
      ];

    var colorInicial = $("#colorPicker").val();
    var cantidadInicial = $(".elemento").length;

    function dameImagenAlAzar() {
        var numeroAleatorio = Math.floor(Math.random() * listaImagenes.length);
        return listaImagenes[numeroAleatorio];
    }

    // Eventos

    $("#btnCambiarColor").click(function () {
        var colorElegido = $("#colorPicker").val();
        $(".imagen-wrap").css("background-color", colorElegido);
        $("body").css("background-color", colorElegido); 
    });

    $("#btnAnadir").click(function () {
        var colorActual = $("#colorPicker").val();
        var imagenNueva = dameImagenAlAzar();

        var htmlNuevo = `
          <div class="elemento">
            <div class="imagen-wrap" style="background-color: ${colorActual};">
              <img class="foto" src="${imagenNueva}" width="100">
            </div>
            <button type="button" class="btnCambiar">Cambiar</button>
            <button type="button" class="btnBorrar">Borrar</button>
          </div>
        `;

        $("#contenedorElementos").append(htmlNuevo);
    });

    $("#btnReset").click(function () {
        $("#contenedorElementos").empty();
        
        $("#colorPicker").val(colorInicial);

        for (var i = 0; i < cantidadInicial; i++) {
            var htmlOriginal = `
              <div class="elemento">
                <div class="imagen-wrap" style="background-color: ${colorInicial};">
                  <img class="foto" src="${listaImagenes[0]}" width="100">
                </div>
                <button type="button" class="btnCambiar">Cambiar</button>
                <button type="button" class="btnBorrar">Borrar</button>
              </div>
            `;
            $("#contenedorElementos").append(htmlOriginal);
        }
        
        $("body").css("background-color", ""); 
    });

    $("#contenedorElementos").on("click", ".btnBorrar", function () {
        $(this).closest(".elemento").remove();
    });

    $("#contenedorElementos").on("click", ".btnCambiar", function () {
        var nuevaFoto = dameImagenAlAzar();
        $(this).closest(".elemento").find(".foto").attr("src", nuevaFoto);
    });

});