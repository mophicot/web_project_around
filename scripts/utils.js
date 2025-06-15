// utils.js

// Función para abrir cualquier popup (recibe el elemento popup)
export function openPopup(popupElement) {
  popupElement.classList.add("active");
}

// Función para cerrar cualquier popup
export function closePopup(popupElement) {
  popupElement.classList.remove("active");
}

// Función para cerrar todos los popups activos
export function closeAllPopups() {
  const activePopups = document.querySelectorAll(".popup.active");
  activePopups.forEach((popup) => closePopup(popup));
}

// FUNCIÓN PARA AGREGAR LISTENERS COMUNES DE CIERRE A TODOS LOS POPUPS
let popupEventsEnabled = false; //variable bandera 🚩 para no volver a añadir los EventListener

export function enablePopupEventListeners() {
  if (popupEventsEnabled) return; // ya se activaron
  popupEventsEnabled = true;
  // Cierre con botón cerrar (.popup__close-button)
  document.querySelectorAll(".popup__close-button").forEach((button) => {
    button.addEventListener("click", () => {
      const popup = button.closest(".popup");
      closePopup(popup);
    });
  });

  // Cierre con tecla Escape (solo un popup activo)
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      //💡se puede usar event.code === 'Escape' que es más consistente entre navegadores.
      const activePopup = document.querySelector(".popup.active");
      if (activePopup) closePopup(activePopup);
    }
  });

  // Cierre con clic fuera del contenido (fondo del popup)
  document.querySelectorAll(".popup").forEach((popup) => {
    popup.addEventListener("click", (event) => {
      if (event.target === popup) {
        closePopup(popup);
      }
    });
  });
}
