# Tripleten web_project_around

1. NOMBRE DEL PROYECTO
   web_project_around

2. DESCRIPCIÓN DEL PROYECTO Y SU FUNCIONALIDAD.

   Este proyecto es el tercero en contemplar JScript además de la interacción con la página para mostrar distintos lugares alrededor de USA

   Esta versión integra la lógica para realizar la validación de los formularios de la página e incorpora el uso de clases para trabajar de froma modular ( Card.js y FormValidator.js). Así mismo se consideran los siguientes aspectos:

   -Encapsulamiento de lógica repetitiva.

   -Desacoplamiento: utils.js no depende de index.js, sino que ofrece herramientas reutilizables.

   -Escalabilidad: Si más adelante agregas más popups, esta estructura ya lo soporta.

3. DESCRIPCIÓN DE LAS TECNOLOGÍAS Y TÉCNICAS UTILIZADAS.

   Para este proyecto se añadió la funcionalidad de generar las trajetas de los lugares usando la función template y clonación

   Con lo anterior se independizó el comportamiento de los botones de like y trash (recién añadido) para cada una de las tarjetas

   También se incorporó un popup para mostrar la imagen de la tarjeta seleccionada en mayor resolución junto con su nombre

   CAMBIOS EN EL SPRINT 9

   - Se añadío el archivo validate.js con la lógica de la vaidación para la formularios el cual exporta el objeto enableValidation a index.js
     el archivo index.js se estableció como type="module" para permitirle mandar a llamar a otros archivos,js
     - También se programaron mensajes dinámicos al usuario usando input y change para informarle de los cambios requeridos para poder validar las entradas del formulario (usando el color rojo y span para mostrar eestos mensajes cada de presiona una tecla o cambia de campo)

   * La funciones de closePopup se refactorizaron en una misma función tanto par editar el perfil, como apra crear nuevas tarjetas

   * Se añadió la funcionalidad de cerrar los Popups presionando la tecla "ESC" o haciendo click fuera del formulario (haciendo click en el Popup con la clase .box y usando target y closest para encontrar el formulario y cerrarlo)

   CAMBIOS EN EL SPRINT 10

   - Se refactorizó el código dividiéndolo en 4 módulos:

     1.-Card.js con el código de la clase Card.

     2.-FormValidator.js con el código de la clase FormValidator.

     3.- utils.js con los controladores de eventos y la función que abre/cierra las ventanas modales.

     4.-El archivo index.js contendrá el resto del código, con esto index.js queda libre de lógica innecesaria. Se encarga del flujo general, mientras utils.js administra los detalles técnicos de los popups.

4. Enlace a GitHub Pages

   URL:
   https://mophicot.github.io/web_project_around/
