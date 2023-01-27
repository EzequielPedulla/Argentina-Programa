document.addEventListener("DOMContentLoaded", function () {
  const email = {
    nombre: "",
    email: "",
    mensaje: "",
  };
  // Seleccionar los elementos de la interfaz
  const inputNombre = document.querySelector("#nombre");
  const inputEmail = document.querySelector("#email");
  const inputMensaje = document.querySelector("#mensaje");
  const formulario = document.querySelector("#formulario");

  // Asignar eventos
  inputNombre.addEventListener("blur", validar);
  inputEmail.addEventListener("blur", validar);
  inputMensaje.addEventListener("blur", validar);

  function validar(e) {
    if (e.target.value.trim() === "") {
      mostrarAlerta(`el Campo ${e.target.id} es obligatorio`);
    } else {
      console.log("si hay algo");
    }
  }

  function mostrarAlerta(mensaje) {
    //Comprueba si ya existe na alerta
    const alerta = document.querySelector(".alerta");
    if (alerta) {
      alerta.remove();
    }
    //Generar alerta en HTMl
    const error = document.createElement("P");
    error.textContent = mensaje;
    error.classList.add("alerta");

    //inyectar el error al formulario
    formulario.appendChild(error);
  }
});
