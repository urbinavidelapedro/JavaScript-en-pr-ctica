document.addEventListener("DOMContentLoaded", function () {
  //capturar todos los botones y ahorras texto
  const botones = document.querySelectorAll("button");

  // repetir para cada boton
  botones.forEach(function (button) {
    button.addEventListener("click", function (event) {
      //seleccionar el color de fondo
      let colorDeFondo = button.style.backgroundColor;
      alert(colorDeFondo);
      let cajita = document.getElementById("caja");
      cajita.style.backgroundColor = colorDeFondo;
    });
  });
});
