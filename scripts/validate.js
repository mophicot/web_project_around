// validate.js
//Lógica de validación

const showInputError = (formElement, inputElement, errorMessage, config) => {
  // Busca el span que tenga clase terminada en "-input-error"
  const errorElement = formElement.querySelector(
    `.${inputElement.id}-input-error`
  );
  if (!errorElement) {
    console.error(
      `No se encontró el elemento de error para input con id: ${inputElement.id}`
    );
    return; // Evita errores posteriores
  }
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorClass);
};

const hideInputError = (formElement, inputElement, config) => {
  const errorElement = formElement.querySelector(
    `.${inputElement.id}-input-error`
  );
  if (!errorElement) {
    console.error(
      `No se encontró el elemento de error para input con id: ${inputElement.id}`
    );
    return;
  }
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement, config) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      config
    );
  } else {
    hideInputError(formElement, inputElement, config);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, config) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(config.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(config.inactiveButtonClass);
    buttonElement.disabled = false;
  }
};

const setEventListeners = (formElement, config) => {
  const inputList = Array.from(
    formElement.querySelectorAll(config.inputSelector)
  );
  const buttonElement = formElement.querySelector(config.submitButtonSelector);

  toggleButtonState(inputList, buttonElement, config);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement, config);
      toggleButtonState(inputList, buttonElement, config);
    });
  });
};

export const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    setEventListeners(formElement, config);
  });
};

// | Emoji | Significado / Uso                                                   | Ejemplo de comentario                      |
// | ----- | ------------------------------------------------------------------- | ------------------------------------------ |
// | 🔧    | Función o sección relacionada con “herramientas” o ajustes técnicos | `// 🔧 Función para mostrar errores`       |
// | 🔍    | Función o proceso de búsqueda, verificación o validación            | `// 🔍 Validar campo individual`           |
// | ✅     | Algo que está correcto, exitoso o que se validó bien                | `// ✅ Validación exitosa`                  |
// | 🛠️   | Proceso de construcción, ajustes o configuración                    | `// 🛠️ Configuración de listeners`        |
// | 🚀    | Función principal o la que inicia un proceso                        | `// 🚀 Inicializar validación`             |
// | ⚠️    | Advertencia, punto crítico o algo que se debe revisar               | `// ⚠️ Requiere revisión`                  |
// | 💡    | Idea, consejo o recordatorio                                        | `// 💡 Mejorar rendimiento aquí`           |
// | 🔄    | Ciclo, repetición o actualización                                   | `// 🔄 Actualizar estado`                  |
// | 📌    | Punto importante, referencia o anclaje                              | `// 📌 Nota importante sobre esta función` |
// | 🔥    | Código crítico o que necesita atención urgente                      | `// 🔥 Este bloque es sensible`            |
// | 🎯    | Objetivo, meta o función clave                                      | `// 🎯 Función principal de validación`    |

// _NOTYET🚧
//🎯
