const validation = (dataForm) => {
  const errors = {};

  const regexEmail =
    /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;

  // const regexEmail2 = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  const regexPassword = /\d/;

  const regexPasswordLength = /^(?=.*\d).{6,10}$/;

  if (!regexEmail.test(dataForm.email)) {
    errors.email = "Debe ser un email valido";
  }

  if (!dataForm.email) {
    errors.email = "No puede ser vacio";
  }

  if (dataForm.email.length > 5) {
    errors.email = "Debe tener menos de 5 caracteres";
  }

  if (!regexPassword.test(dataForm.password)) {
    errors.password = "La contraseña debe tener un número";
  }

  if (!(dataForm.password.length > 5 && dataForm.password.length < 11)) {
    errors.password = "Debe tener entre 6 y 10 caracteres";
  }

  // if (!regexPasswordLength.test(dataForm.password)) {
  //   errors.password = 'Debe tener mínimo un número y entrer 6 y 10 caracteres';
  // }

  return errors;
};

export default validation;
