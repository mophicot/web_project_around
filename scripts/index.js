// 1.- SELECCION EN EL DOM ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Popup
const buttonEdit = document.querySelector(".explorer-info__edit");
const buttonClose = document.querySelector(".form__close-button");
const popup = document.querySelector(".popup");

//Cambiar nombre
const form = document.querySelector(".form");
const nameInput = document.querySelector(".form__name");
const jobInput = document.querySelector(".form__job");
const explorerName = document.querySelector(".explorer-info__name-complete");
const explorerJob = document.querySelector(".explorer-info__job");

// NUEVA CARTA
//Popup form para nueva card ++++++++++++++++++++++++++++++++++++++++++++++
const buttonAddCard = document.querySelector(".profile-id__add-button");
const buttonCloseAddCard = document.querySelector(
  ".form__add-card-close-button"
);
const popupAddCard = document.querySelector(".new-place-popup");

//cambiar imagen y titulo con URL++++++++++++++++++++++++++++++
//SE MANDA A LLAMAR POR ID, NO POR CLASE PARA REUTILIZAR EL CÓDIGO
const imageTitleInput = document.querySelector("#new-place");
const imageUrlInput = document.querySelector("#url");
const formCard = document.querySelector("#form-new-card");

//Template
const gallery = document.querySelector(".elements");
const galleryCard = document.querySelector("#card"); // llamada con ID

//Arreglo de tarjetas
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

//2.- FUNCIONALIDAD~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Popup
// --abrir
function openPopup() {
  popup.classList.add("active");
}
// --cerrar
function closePopup() {
  popup.classList.remove("active");
}

//Cambiar nombre
//--recolección, asignación y actualización

function handleSubmit(event) {
  //evitar que se ejecute el submit
  event.preventDefault();

  //guardar datos en value
  const name = nameInput.value;
  const job = jobInput.value;
  explorerName.textContent = name;
  explorerJob.textContent = job;

  //cerrar el Popup
  closePopup();
}

//FUNCIÓN DE CLONACIÓN DE TARJETA++++++++++++++++++++++++++++++++++++++++++++++++
function cloneCard(name, link) {
  //los nombres deben coincidir con el arreglo objetivo
  //clona todo su contenido (con true, incluye los nodos hijos).
  //Resultado: cardContentClone es una copia lista para personalizar.
  const cardContentClone = galleryCard.content.cloneNode(true);

  //nombrando al contenido de la carta clonada (.element__title) como
  //...clonedCardTitle para trabajar con ella
  //Se busca dentro del clon el elemento con clase .element__title.
  //Se reemplaza su contenido con el texto que recibe la función como name.
  const clonedCardTitle = cardContentClone.querySelector(".element__title");
  clonedCardTitle.textContent = name;

  //lo mismo para link y alt
  //Se selecciona el elemento de la imagen.
  //Se le asigna el texto alternativo (alt) y el enlace a la imagen (src).
  const clonedCardUrl = cardContentClone.querySelector(".element__photo"); //clonedCardUrl es un objeto
  clonedCardUrl.alt = name;
  clonedCardUrl.src = link;

  //BOTONES
  //  -- se declaran las funciones DENTRO de la clonación para que ya
  // ...se clonen con las tarjetas
  const cardTrash = cardContentClone.querySelector(".element__trash-image");
  const cardLike = cardContentClone.querySelector(".element__like-button");

  //Boton de basura
  // Se agrega un event listener al botón de eliminar.
  // evt.target es el botón clicado.
  // closest(".element") busca el contenedor de la tarjeta.
  // remove() lo elimina del DOM.
  cardTrash.addEventListener("click", (evt) => {
    //requiere un evento porque busca el más cercano a lo que le das click
    const removeTrash = evt.target.closest(".element"); //target.closest es palabra reservada
    removeTrash.remove(); //remove tambien es palabra reservada
  });

  //boton like
  // Agrega un event listener al botón de "like".
  //Al hacer clic, activa o desactiva una clase CSS (toggle), que cambia su estilo visual
  cardLike.addEventListener("click", () => {
    // no requiere evento porque se aplica directamente
    // ... al boton deonde se hace click
    cardLike.classList.toggle("element__like-button-active");
  });

  //ATRIBUTOS PARA LA NUEVA ARJETA DESDE FORM
  clonedCardUrl.addEventListener("click", () => {
    openPopupImage(clonedCardUrl.src, clonedCardUrl.alt);
  });

  gallery.prepend(cardContentClone); //mete la carta clonada al inicio de la galería
} //FUNCIÓN DE CLONACIÓN DE TARJETA++++++++++++++++++++++++++++++++++++++++++++++++FIN

// Popup para añadir tarjeta+++++++++++++++++++++++++++++++++++++++++++++++
// --abrir
function openPopupAddCard() {
  popupAddCard.classList.add("active");
}
// --cerrar
function closePopupAddCard() {
  popupAddCard.classList.remove("active");
}

//AGREGAR IMAGEN Y Cambiar nombre
//--recolección, asignación y actualización
function handleSubmitImage(event) {
  //evitar que se ejecute el submit

  event.preventDefault();
  //guardar datos en value
  const imageTitle = imageTitleInput.value;
  const imageUrl = imageUrlInput.value;

  //Clonado de la nueva tarjeta
  cloneCard(imageTitle, imageUrl);

  //cerrar el Popup
  closePopupAddCard();
}

// Popup para expandir imagen+++++++++++++++++++++++++++++++++++++++++++++++++++++++
// --abrir
function openPopupImage(urlImage, titleImage) {
  PopupExpandedImage.src = urlImage;
  PopupExpandedImageTitle.textContent = titleImage;
  imagePopup.classList.add("active");
}

// --cerrar
function closePopupImage() {
  imagePopup.classList.remove("active");
}

//Genera las tarjetas
initialCards.forEach((item) => {
  cloneCard(item.name, item.link);
});

// declaración de constantes para IMAGEN EXPANDIDA
//Popup imagen emergente+++++++++++++++++++++++++++++++++++++++++++++++++++++
const imageOpenPopup = document.querySelector(".element__photo"); //abre el popup
const imageClosePopup = document.querySelector(".image-popup__close-button");
const imagePopup = document.querySelector(".image-popup");
const PopupExpandedImage = document.querySelector(".image-popup__photo");
const PopupExpandedImageTitle = document.querySelector(".image-popup__title");

//3.- AÑADIR EVENTOS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Popup
// --abrir
buttonEdit.addEventListener("click", openPopup);

// --cerrar
buttonClose.addEventListener("click", closePopup);

//Cambiar nombre
form.addEventListener("submit", handleSubmit);

// Popup Add Card++++++++++++++++++++++++++++++++++++++++
// --abrir
buttonAddCard.addEventListener("click", openPopupAddCard);

// --cerrar
buttonCloseAddCard.addEventListener("click", closePopupAddCard);
// Popup Add Card++++++++++++++++++++++++++++++++++++++++fin

//Añadir una nueva tarjeta
formCard.addEventListener("submit", handleSubmitImage);

// --cerrar
imageClosePopup.addEventListener("click", closePopupImage);

// EVENTO el Popup de la imagen
// clonedCardUrl.addEventListener("click", () => {
//   openPopupImage(clonedCardUrl.src, clonedCardUrl.alt);
// });

//Botón Me Gusta
// --like
// buttonLike.addEventListener("click", likeActive);
// solo funciona para la primera tarjeta

//++++++++++++++++++++++++++++++++++++++++++CARDS++++++++++++++++++++++

// const gallery = document.querySelector(".elements");
// const galleryTemplate = document.querySelector(".card_template");

/* Aquí se aplica el array */
// function addCards() {
//   initialCards.forEach((item) => {
//     const card = createCard(item.name, item.link);
//     gallery.append(card);
//     openPopupAdd.classList.remove("popup__add_opened");
//   });
// }
