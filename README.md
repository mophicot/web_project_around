# Tripleten web_project_around

1. Nombre del proyecto
   web_project_around

2. Descripción del proyecto y su funcionalidad.

   Este proyecto es el tercero en contemplar JScript además de la interacción con la página para mostrar distintos lugares alrededor de USA
   integra la lógica para realizar la validación de los formularios de la página

3. Descripción de las tecnologías y técnicas utilizadas.

   Para este proyecto se añadió la funcionalidad de generar las trajetas de los lugares usando la función template y clonación

   Con lo anterior se independizó el comportamiento de los botones de like y trash (recién añadido) para cada una de las tarjetas

   También se incorporó un popup para mostrar la imagen de la tarjeta seleccionada en mayor resolución junto con su nombre

   CAMBIOS EN EL SPRINT 9

   - Se añadío el archivo validate.js con la lógica de la vaidación para la formularios el cual exporta el objeto enableValidation a index.js
     el archivo index.js se estableció como type="module" para permitirle mandar a llamar a otros archivos,js
     - También se programaron mensajes dinámicos al usuario usando input y change para informarle de los cambios requeridos para poder validar las entradas del formulario (usando el color rojo y span para mostrar eestos mensajes cada de presiona una tecla o cambia de campo)

   * La funciones de closePopup se refactorizaron en una misma función tanto par editar el perfil, como apra crear nuevas tarjetas

   * Se añadió la funcionalidad de cerrar los Popups presionando la tecla "ESC" o haciendo click fuera del formulario (haciendo click en el Popup con la clase .box y usando target y closest para encontrar el formulario y cerrarlo)

4. Enlace a GitHub Pages

   URL:
   https://mophicot.github.io/web_project_around/
