// Card.js

export class Card {
  constructor(name, link, templateSelector) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;

    this._element = null; // Declarar la propiedad para luego usarla
  } //Fin del constructor

  // Clona el contenido del template HTML para crear una nueva tarjeta
  _getTemplate() {
    const cardTemplate = document
      .querySelector(this._templateSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    return cardTemplate;
  }

  // Método principal: genera la tarjeta con eventos y contenido
  createCard() {
    this._element = this._getTemplate(); // _element es el Template de la card geralizado

    // Referencias a sub-elementos:
    //almacena referencias a los sub-elementos de la tarjeta (_element)
    //  para manipularlos más fácilmente como propiedades del objeto (this)
    this._photo = this._element.querySelector(".element__photo");
    this._title = this._element.querySelector(".element__title");
    this._likeButton = this._element.querySelector(".element__like-button");
    this._deleteButton = this._element.querySelector(".element__trash-button");

    // Asigna el contenido de la card con la información del constructor
    this._photo.src = this._link;
    this._photo.alt = this._name;
    this._title.textContent = this._name;

    // Añade los listeners para los botones de like y borrar: se declara más adelante
    this._setEventListeners();

    return this._element;
  }

  // Configura los eventos internos (like y borrar)
  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._likeButton.classList.toggle("element__like-button_active");
    });

    this._deleteButton.addEventListener("click", () => {
      this._element.remove();
    });
  }
} //Fin de la clase Card
