document.addEventListener("DOMContentLoaded", function () {
  let formulario = this.getElementById("formulario");

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let asunto = document.getElementById("asunto").value;
    let mensaje = document.getElementById("mensaje").value;

    let regex = /^[A-Za-z\s]+$/;

    function validarFormulario() {
      if (!regex.test(nombre)) {
        let errorNombre = document.querySelector(".errorNombre");
        errorNombre.textContent = "El nombre es requerido";
      }

      if (!regex.test(asunto)) {
        let errorAsunto = document.querySelector(".errorAsunto");
        errorAsunto.textContent = "El asunto es requerido";
      }

      if (!regex.test(mensaje)) {
        let errorMensaje = document.querySelector(".errorMensaje");
        errorMensaje.textContent = "El mensaje es requerido";
      }

      if (regex.test(nombre) && regex.test(asunto) && regex.test(mensaje)) {
        let resultado = document.querySelector(".resultado");
        resultado.textContent = "Mensaje enviado con exito!!!";
      }
    }

    validarFormulario();
  });
});
