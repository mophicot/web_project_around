// 1.- SELECCION EN EL DOM +++++++++++++++++++++++++
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

//Botón Me Gusta
const buttonLike = document.querySelector(".element__like-button");

//2.- FUNCIONALIDAD +++++++++++++++++++++++++++++++
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

//Botón Me Gusta
// --like
function likeActive() {
  buttonLike.classList.add("active");
}

//3.- AÑADIR EVENTOS +++++++++++++++++++++++++++++++

// Popup
// --abrir
buttonEdit.addEventListener("click", openPopup);
// --cerrar
buttonClose.addEventListener("click", closePopup);

//Cambiar nombre
form.addEventListener("submit", handleSubmit);

//Botón Me Gusta
// --like
buttonLike.addEventListener("click", likeActive);
// solo funciona para la primera tarjeta

// El evento especial submit envía el formulario al servidor
//  (aún no lo has estudiado, pero no te preocupes).
//   Mira cuidadosamente el ejemplo de código para manejar este evento,
//   y trata de comprender lo que está pasando.
//   Hemos añadido algunos comentarios en el código para ayudarte:

// Busquemos el formulario en el DOM
// let formElement = // Utiliza el método querySelector()

// Lo siguiente es el manipulador (handler) de entrega de formularios, aunque
// no se enviará en ningún sitio todavía

// Observa que el nombre de la función comienza con un verbo
// y describe exactamente lo que hace la función
// function handleProfileFormSubmit(evt) {
// Esta línea impide que el navegador
// entregue el formulario en su forma predeterminada.
// evt.preventDefault();
// Una vez hecho esto, podemos definir nuestra propia forma de entregar el formulario.
// Lo explicaremos todo con más detalle después.

// Busquemos los campos del formulario en el DOM
// let nameInput = // Utiliza el método querySelector()
// let jobInput = // Utiliza el método querySelector()

// Obtén los valores de cada campo desde la propiedad de valor correspondiente

// Selecciona los elementos donde se introducirán los valores de los campos

// Inserta nuevos valores utilizando el textContent
// propiedad del método querySelector()
// }

// Conecta el manipulador (handler) al formulario:
// se observará el evento de entrega
// formElement.addEventListener('submit', handleProfileFormSubmit);
