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
//Popup form para nueva card
const buttonAddCard = document.querySelector(".profile-id__add-button");
const buttonCloseAddCard = document.querySelector(
  ".form__add-card-close-button"
);
const popupAddCard = document.querySelector(".new-place-popup");

//cambiar imagen y titulo con URL
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

//Función de clonación de tarjeta
function cloneCard(name, link) {
  //los nombres deben coincidir con el arreglo objetivo
  const cardContentClone = galleryCard.content.cloneNode(true);
  //nombrando al contenido de la carta clonada (.element__title) como
  //...clonedCardTitle para trabajar con ella
  const clonedCardTitle = cardContentClone.querySelector(".element__title");
  clonedCardTitle.textContent = name;
  //lo mismo para link y alt
  const clonedCardUrl = cardContentClone.querySelector(".element__photo"); //clonedCardUrl es un objeto
  clonedCardUrl.alt = name;
  clonedCardUrl.src = link;
  //botones -- se declaran las funciones DENTRO de la clonación para que ya
  // ...se clonen con las funciones
  const cardTrash = cardContentClone.querySelector(".element__trash-image");
  const cardLike = cardContentClone.querySelector(".element__like-button");

  //boton de basura
  cardTrash.addEventListener("click", (evt) => {
    //requiere un evento porque busca el más cercano a lo que le das click
    const removeTrash = evt.target.closest(".element"); //target.closest es palabra reservada
    removeTrash.remove(); //remove tambien es palabra reservada
  });

  //boton like
  cardLike.addEventListener("click", () => {
    // no requiere evento porque se aplica directamente
    // ... al boton deonde se hace click
    cardLike.classList.toggle("element__like-button-active");
  });

  //ATRIBUTOS PARA LA NUEVA ARJETA DESDE FORM
  clonedCardUrl.addEventListener("click", () => {
    openPopupImage(clonedCardUrl.src, clonedCardUrl.alt);
  });

  gallery.prepend(cardContentClone); //al inicio mete la carta clonada
}

// Popup para añadir tarjeta
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

// Popup para expandir imagen
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

//genera las tarjetas
initialCards.forEach((item) => {
  cloneCard(item.name, item.link);
});

// declaración de constantes para IMAGEN EXPANDIDA
//Popup imagen emergente
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

// Popup Add Card
// --abrir
buttonAddCard.addEventListener("click", openPopupAddCard);
// --cerrar
buttonCloseAddCard.addEventListener("click", closePopupAddCard);

//Añadir una nueva tarjeta
formCard.addEventListener("submit", handleSubmitImage);

imageClosePopup.addEventListener("click", closePopupImage);
