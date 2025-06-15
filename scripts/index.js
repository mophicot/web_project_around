// index.js

// ORDEN SUGERIDO 🚧
// 1. IMPORTS
// 2. CONSTANTES (selectores, configuración, etc.)
// 3. FUNCTIONES
// 4. EVENT LISTENERS

// 📌1. IMPORTS------------------------------------------------------
//🚀 PASO 1: Importación del módulo de validación
//importar la clase de FormValidator.js
import { FormValidator } from "./FormValidator.js";
//importar la clase de Card.js
import { Card } from "./Card.js";
//importar lo necesario de utils.js
import {
  openPopup,
  closePopup,
  closeAllPopups,
  enablePopupEventListeners,
} from "./utils.js";

// 📌2. CONSTANTES 📦 Selección de elementos del DOM------------------
// Popup para editar nombre y perfil [profilePopup]
const buttonEditProfile = document.querySelector(".explorer-info__edit");
const buttonCloseProfilePopup = document.querySelector(".form__close-button");
const profilePopup = document.querySelector(".profile-popup");
// seleccionar los inputs y los elementos que muestran el nombre
//  y la ocupación en el perfil
// 📄 Formulario y campos de entrada
const profileForm = document.querySelector(".form"); // El formulario
const nameInput = document.querySelector(".form__name"); // Input para nombre
const jobInput = document.querySelector(".form__job"); // Input para ocupación
// elementos donde se mostrará la información
const explorerName = document.querySelector(".explorer-info__name-complete"); // Donde se muestra el nombre
const explorerJob = document.querySelector(".explorer-info__job"); // Donde se muestra la ocupación

// Popup de imagen expandida y sus elementos [imagePopup]
const imagePopup = document.querySelector(".image-popup");
const imagePopupPhoto = imagePopup.querySelector(".image-popup__photo");
const imagePopupTitle = imagePopup.querySelector(".image-popup__title");
const imagePopupCloseButton = imagePopup.querySelector(
  ".image-popup__close-button"
);
// contenedor padre de tarjetas
const placesContainer = document.querySelector(".elements"); //necesario tmb para newPlacePopup
//  arreglo inicial de tarjetas
const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

// Popup para agregar nueva tarjeta [newPlacePopup]
const buttonAddCard = document.querySelector(".profile-id__add-button"); // botón "+"
const newPlacePopup = document.querySelector(".new-place-popup");
// 📄 Formulario y campos de entrada
const newPlaceForm = newPlacePopup.querySelector("#form-new-card");
const newPlaceInputTitle = newPlacePopup.querySelector(".form__new-place");
const newPlaceInputUrl = newPlacePopup.querySelector(".form__url");
const newPlaceCloseButton = newPlacePopup.querySelector(
  ".form__add-card-close-button"
);

//📌 3. FUNCTIONES-------------------------------------------------
// Para TODOS los popups
// Función para abrir un popup
// function openPopup(popupElement) {
//   popupElement.classList.add("active");
// }
// // Función para cerrar un popup
// function closePopup(popupElement) {
//   popupElement.classList.remove("active");
// }
// // Función para cerrar todos los popups activos
// function closeAllPopups() {
//   const activePopups = document.querySelectorAll(".popup.active");
//   activePopups.forEach((popup) => closePopup(popup));
// }

//Para profilePopup
//crear la función para abrir el profilePopup
function openProfilePopup() {
  // inicializar el formulario con datos actuales
  nameInput.value = explorerName.textContent;
  jobInput.value = explorerJob.textContent;

  openPopup(profilePopup);
}
// manejar el formulario para cambiar el nombre y ocupación
function handleSubmitProfile(event) {
  event.preventDefault();
  // inicializar con los valores actuales
  const name = nameInput.value;
  const job = jobInput.value;
  //paso intermedio para asignación, es opcional
  // pero puede ser útil en depuración [ej: console.log(name)]
  explorerName.textContent = name;
  explorerJob.textContent = job;

  closeAllPopups();
}

//Para imagePopup
//  función para abrir el imagePopup con la foto y título recibidos
function openImagePopup(name, link) {
  imagePopupPhoto.onload = null; // limpia el handler antes de asignar
  //   para evitar que el popup se abra antes de que la imagen cargue
  imagePopupPhoto.onload = () => {
    imagePopup.classList.add("active");
  };

  imagePopupPhoto.src = link;
  imagePopupPhoto.alt = name;
  imagePopupTitle.textContent = name;
}

//Para newPlacePopup
//  función para abrir el newPlacePopup para agregar una nueva tarjeta[+]
function openNewPlacePopup() {
  newPlaceForm.reset(); // limpia formulario para agregar tarjeta nueva
  openPopup(newPlacePopup);
}

// función para crear una tarjeta en el DOM (según el template [id="card"])
// function createCard(name, link) {
//   const cardTemplate = document
//     .querySelector("#card")
//     .content.querySelector(".element");
//   const card = cardTemplate.cloneNode(true);

//   const photo = card.querySelector(".element__photo");
//   const title = card.querySelector(".element__title");

//   photo.src = link;
//   photo.alt = name;
//   title.textContent = name;

//   //botón de like 💗 y de borrar 🗑️
//   const likeButton = card.querySelector(".element__like-button");
//   const deleteButton = card.querySelector(".element__trash-button");
//   // funcionalidad
//   //   Listener para botón Like 💗
//   likeButton.addEventListener("click", () => {
//     likeButton.classList.toggle("element__like-button_active");
//   });
//   //   Listener para botón borrar 🗑️
//   deleteButton.addEventListener("click", () => {
//     card.remove(); // elimina la tarjeta del DOM
//   });

//   return card;
// }

// función para crear una tarjeta en el DOM usando clases (según el template [id="card"])
function createCard(name, link) {
  const card = new Card(name, link, "#card");
  return card.createCard();
}

//función para manejar el envío del formulario nuevo lugar
function handleSubmitNewPlace(event) {
  event.preventDefault();

  const title = newPlaceInputTitle.value;
  const url = newPlaceInputUrl.value;

  // Crear nueva tarjeta y agregarla al contenedor
  const newCard = createCard(title, url);
  placesContainer.prepend(newCard);

  closeAllPopups();
}

// 📌 4. EVENT LISTENERS ------------------------------------------
//Para todos los Popups (profilePopup, imagePopup y newPlacePopup)
//    cierre universal de popups mediante botón con clase común
// document.querySelectorAll(".popup__close-button").forEach((closeButton) => {
//   closeButton.addEventListener("click", () => {
//     const popup = closeButton.closest(".popup");
//     closePopup(popup);
//   });
//   // en lugar de: buttonCloseProfilePopup.addEventListener("click", closeAllPopups); para c/u
// });

// Activa los listeners universales para cerrar popups
enablePopupEventListeners();

// //    cierre de popups con tecla Escape
// document.addEventListener("keydown", (event) => {
//   if (event.key === "Escape") {
//     //💡Si solo vamos a cerrar todos a la vez cambiar X closeAllPopups();
//     const activePopup = document.querySelector(".popup.active");
//     if (activePopup) closePopup(activePopup);
//   }
// });
// //    cierre de popups  al hacer clic fuera del contenedor
// document.querySelectorAll(".popup").forEach((popupElement) => {
//   //crea un Node list
//   popupElement.addEventListener("click", (event) => {
//     if (event.target === popupElement) {
//       //revisa que el click haya sido
//       // exactamente en el fondo negro [popupElement correspondiente] y no en sus hijos
//       closePopup(popupElement);
//     }
//   });
// });

// Para profilePopup
// conecta el buttonEditProfile con openProfilePopup
buttonEditProfile.addEventListener("click", openProfilePopup);
// conecta el evento submit del formulario [click en el botón] con handleSubmit:
profileForm.addEventListener("submit", handleSubmitProfile);

// Para imagePopup
//  añade listener para cerrar el imagePopup
placesContainer.addEventListener("click", (event) => {
  // verificar si el click fue en una imagen
  if (event.target.classList.contains("element__photo")) {
    const cardElement = event.target.closest(".element");
    const name = cardElement.querySelector(".element__title").textContent;
    const link = event.target.src;

    openImagePopup(name, link);
  }
});

//Para newPlacePopup
// abrir popup "Agregar tarjeta" al hacer click en botón "+"
buttonAddCard.addEventListener("click", openNewPlacePopup);
// manejar el submit del formulario para agregar tarjeta
newPlaceForm.addEventListener("submit", handleSubmitNewPlace);

//Genera las tarjetas
initialCards.forEach((item) => {
  const card = createCard(item.name, item.link);
  placesContainer.append(card);
});

const config = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "button_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};

const formList = Array.from(document.querySelectorAll(config.formSelector));

formList.forEach((formElement) => {
  const validator = new FormValidator(config, formElement);
  validator.enableValidation();
});
