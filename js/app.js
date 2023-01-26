document.addEventListener("DOMContentLoaded", function () {
  const email = {
    nombre: "",
    email: "",
    mensaje: "",
  };
  // Seleccionar los elementos de la interfaz
  const inputNombre = document.querySelector("#name");
  const inputEmail = document.querySelector("#email");
  const inputMensaje = document.querySelector("#mensaje");
  const formulario = document.querySelector("#formulario");

  // Asignar eventos
  inputNombre.addEventListener("blur", validar);
  inputEmail.addEventListener("blur", validar);
  inputMensaje.addEventListener("blur", validar);
  function validar(e) {
    console.log(e.target.value);
  }
});
