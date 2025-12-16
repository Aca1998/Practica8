$(function () {

  let estado = "inicial";
  let temporizador = null;
  let tiempoInicio = 0;

  function cambiarPantalla(clase, texto, subtexto) {
    $("#pantalla").removeClass().addClass(clase);
    $("#mensaje").text(texto);
    $("#submensaje").text(subtexto || "");
  }

  function irInicial() {
    estado = "inicial";
    cambiarPantalla(
      "estado-inicial",
      "Haz click para empezar",
      "Cuando se ponga roja, haz click rápido"
    );
  }

  function irEsperando() {
    estado = "esperando";
    cambiarPantalla(
      "estado-esperando",
      "Espera...",
      "No hagas click todavía"
    );

    const tiempoAleatorio = 1000 + Math.floor(Math.random() * 3000);

    temporizador = setTimeout(function () {
      irRojo();
    }, tiempoAleatorio);
  }

  function irRojo() {
    estado = "rojo";
    cambiarPantalla(
      "estado-rojo",
      "¡CLICK YA!",
      ""
    );
    tiempoInicio = performance.now();
  }

  function irFinal(tiempo) {
    estado = "final";
    cambiarPantalla(
      "estado-final",
      Math.round(tiempo) + " ms",
      "Haz click para repetir"
    );
  }

  function irFallo() {
    estado = "fallo";
    cambiarPantalla(
      "estado-fallo",
      "Demasiado pronto",
      "Haz click para volver a empezar"
    );
  }


  irInicial();

  $("#pantalla").on("click", function () {

    if (estado === "inicial") {
      irEsperando();
      return;
    }

    if (estado === "esperando") {
      clearTimeout(temporizador);
      irFallo();
      return;
    }

    if (estado === "rojo") {
      const tiempoReaccion = performance.now() - tiempoInicio;
      irFinal(tiempoReaccion);
      return;
    }

    if (estado === "final") {
      irEsperando();
      return;
    }

    if (estado === "fallo") {
      irInicial();
      return;
    }

  });

});
