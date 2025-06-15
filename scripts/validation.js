// validation.js
//🚧 Reconstrucción modular de validate.js paso a paso

//  ⚠️USA FUNCION EN LUGAR DE CONST Y =>

// 🔧 Muestra el mensaje de error en un campo inválido
function showInputError(formElement, inputElement, errorMessage, config) {
  // 1. Buscar el elemento de error asociado al input
  const errorElement = formElement.querySelector(
    `.${inputElement.id}-input-error`
  );
  // 2. Si no se encuentra, mostrar un error en consola y salir (no hay span con esa clase en el HTML)
  if (!errorElement) {
    console.error(
      `No se encontró el elemento de error para input con id: ${inputElement.id}`
    );
    return; // Evita errores posteriores
  }
  // 3. Aplicar clases de estilo para marcar el input como inválido
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage; // mostrar mensaje en span
  errorElement.classList.add(config.errorClass); // darle al span la clase
  //de acuerdo con config
}

// 🔧 Función para ocultar los errores de validación en un input
function hideInputError(formElement, inputElement, config) {
  // 1. Buscar el span de error asociado al input
  const errorElement = formElement.querySelector(
    `.${inputElement.id}-input-error`
  );
  // 2. Si no se encuentra, mostrar un error en consola y salir (no hay span con esa clase en el HTML)
  if (!errorElement) {
    console.error(
      `No se encontró el elemento de error para input con id: ${inputElement.id}`
    );
    return;
  }
  // 3. Remover clases de error en el input
  inputElement.classList.remove(config.inputErrorClass);
  // 4. Limpiar el texto del mensaje de error
  errorElement.textContent = "";
  // 5. Ocultar el span de error
  errorElement.classList.remove(config.errorClass);
}

// 🔍 Función que valida un campo individual
function checkInputValidity(formElement, inputElement, config) {
  if (!inputElement.validity.valid) {
    // Mostrar error, con el mensaje que da el navegador automáticamente
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      config
    );
  } else {
    // Ocultar error si es válido
    hideInputError(formElement, inputElement, config);
  }
}

// ✅ Función que revisa si hay al menos un input inválido
function hasInvalidInput(inputList) {
  // Recibe un array o NodeList de inputs.

  return inputList.some((inputElement) => !inputElement.validity.valid);
  // Usa .some() para verificar si al menos uno no es válido.
  // Devuelve true si hay alguno inválido, false si todos están bien.
}

// 🔘 Función para activar/desactivar el botón de submit
function toggleButtonState(inputList, buttonElement, config) {
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
    buttonElement.classList.add(config.inactiveButtonClass);
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove(config.inactiveButtonClass);
  }
}

// 🛠️ Función que configura los listeners en un formulario
function setEventListeners(formElement, config) {
  const inputList = Array.from(
    //crea un array con todos los inputs del formulario
    formElement.querySelectorAll(config.inputSelector)
  );
  const buttonElement = formElement.querySelector(config.submitButtonSelector); //selecciona el botón submit del form

  // Inicializar estado del botón al cargar la página/formulario
  toggleButtonState(inputList, buttonElement, config);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      //actualiza el status con cada teclazo
      checkInputValidity(formElement, inputElement, config);
      toggleButtonState(inputList, buttonElement, config);
    });
  });
}

// 🚀 Función principal que inicializa la validación
export function enableValidation(config) {
  // 1. Buscar todos los formularios que coincidan con el selector
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  // 2. Iterar sobre cada formulario y aplicar la validación
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault(); // Prevenir el envío real del formulario
    });

    setEventListeners(formElement, config); // Añadir los listeners a ese formulario
  });
}
