// FormValidator.js

export class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._config.inputSelector)
    );
    this._buttonElement = this._formElement.querySelector(
      this._config.submitButtonSelector
    );
  }

  // 🔧 Método privado que Muestra el mensaje de error en un campo inválido
  _showInputError(inputElement, errorMessage) {
    // Buscar el span de error asociado al input
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-input-error`
    );
    // Si no se encuentra, mostrar un error en consola y salir (no E span con esa clase en el HTML)
    if (!errorElement) {
      console.error(
        `No se encontró el elemento de error para input con id: ${inputElement.id}`
      );
      return;
    }
    //Aplicar clases de estilo para marcar el input como inválido
    inputElement.classList.add(this._config.inputErrorClass);
    errorElement.textContent = errorMessage; // mostrar mensaje en span
    errorElement.classList.add(this._config.errorClass); // darle al span la clase
    //de acuerdo con config
  }

  // 🔧Método privado que  Oculta el mensaje de error en un campo válido
  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-input-error`
    );
    if (!errorElement) {
      console.error(
        `No se encontró el elemento de error para input con id: ${inputElement.id}`
      );
      return;
    }

    inputElement.classList.remove(this._config.inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(this._config.errorClass);
  }

  // 🔍 Método privado que valida un campo individual
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      // Mostrar error, con el mensaje que da el navegador automáticamente
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      // Ocultar error si es válido
      this._hideInputError(inputElement);
    }
  }

  // ✅ Método privado que revisa si hay al menos un input inválido
  _hasInvalidInput() {
    // procesa this.inputList, un array o NodeList de inputs.

    return this._inputList.some((inputElement) => !inputElement.validity.valid);
    //inputElement es un elemento del array this._inputList
    // Usa .some() para verificar si al menos uno no es válido.
    // Devuelve true si hay alguno inválido, false si todos están bien.
  }

  // 🔘 Método privado para activar/desactivar el botón de submit
  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.disabled = true;
      this._buttonElement.classList.add(this._config.inactiveButtonClass);
    } else {
      this._buttonElement.disabled = false;
      this._buttonElement.classList.remove(this._config.inactiveButtonClass);
    }
  }

  // 🛠️ Método privado que configura los listeners en un formulario
  _setEventListeners() {
    // Inicializar estado del botón al cargar la página/formulario
    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        //actualiza el status con cada teclazo
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  // 🚀 Método publico principal que inicializa la validación
  enableValidation() {
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault(); // evitar envío para probar validación
    });

    this._setEventListeners(); // Añadir los listeners al formulario de la instancia
  }
} // FIN DE LA CLASE FormValidator
