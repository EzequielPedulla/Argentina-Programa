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
      return;
    }
    if (e.target.id === "email" && !validarEmail(e.target.value)) {
      mostrarAlerta("El email no es válido");
      return;
    }

    limpiarAlerta();
    //Asignar los valores
    email[e.target.name] = e.target.value.trim().toLowerCase();
    //Comprobar el objeto de email
    comprobarEmail();
  }

  function mostrarAlerta(mensaje) {
    limpiarAlerta();

    //Generar alerta en HTMl
    const error = document.createElement("P");
    error.textContent = mensaje;
    error.classList.add("alerta");

    //inyectar el error al formulario
    formulario.appendChild(error);
  }
  //Comprueba si ya existe na alerta
  function limpiarAlerta() {
    const alerta = document.querySelector(".alerta");
    if (alerta) {
      alerta.remove();
    }
  }
  function validarEmail(email) {
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const resultado = regex.test(email);
    return resultado;
  }
  function comprobarEmail() {
    console.log(Object.values(email).includes(""));
  }
});
