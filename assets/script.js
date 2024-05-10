const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", ()=>{
  nav.classList.add("visible");
})
cerrar.addEventListener("click", ()=>{
  nav.classList.remove("visible");
})

function validarForm() {
  const nombreValido = validateNombre();
  const emailValido = validateEmail();
  const passwordValido = validatePassword();


  return nombreValido && emailValido && passwordValido ;
}

function validateNombre() {
  const nombreInput = document.getElementById('nombre');
  const errorNombre = document.getElementById('errorNombre');
  const nombre = nombreInput.value.trim();

  const nombreRegex = /^[a-zA-Z\s]+$/;

  if (nombre === '') {
      errorNombre.textContent = 'El nombre es requerido';
      return false;
  } else if (!nombreRegex.test(nombre)) {
      errorNombre.textContent = 'El nombre solo puede contener letras y espacios';
      return false;
  } else {
      errorNombre.textContent = '';
      return true;
  }
}

function validateEmail() {
  const emailInput = document.getElementById('email');
  const errorEmail = document.getElementById('errorEmail');
  const email = emailInput.value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === '') {
      errorEmail.textContent = 'El correo electrónico es requerido';
      return false;
  } else if (!emailRegex.test(email)) {
      errorEmail.textContent = 'El correo electrónico no es válido';
      return false;
  } else {
      errorEmail.textContent = '';
      return true;
  }
}




function validatePassword() {
  const passwordInput = document.getElementById('password');
  const errorPassword = document.getElementById('errorPassword');
  const password = passwordInput.value.trim();

  if (password === '') {
      errorPassword.textContent = 'La contraseña es requerida';
      return false;
  } else {
      errorPassword.textContent = '';
      return true;
  }
}


function validarForm() {
  return validateNombre() && validateEmail() && validatePassword();
}


