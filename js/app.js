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

  inputEmail.addEventListener("input", validar);
  inputNombre.addEventListener("input", validar);
  inputMensaje.addEventListener("input", validar);
  formulario.addEventListener("submit", enviarEmail);
});
