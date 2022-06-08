
# [<img src="./assets/quotes512.png" alt="Quotes logo" width="30"/>](#) Quotes Machine

* [Go to Quotes Machine site](https://asquotesmachine.herokuapp.com/)

***

<details>

  <summary>Español</summary>

  Una aplicación para obtener aleatoriamente citas inspiradoras o para reflexionar. Puedes hacerlo manualmente o recibir una automáticamente cada 5/10/15 segundos. Las ultimas 5 frases visualizadas serán guardadas en una galería para poder verlas nuevamente. También puedes buscar una cita (por contenido y/o por autor) en nuestra base de datos. Si quieres puedes compartir las frases en Facebook, Twitter, Tumblr o copiarla en el portapapeles para enviarla por el medio que desees. Puedes hacerlo en formato de texto o de imagen, con la opción de editar previamente en el segundo caso.
  
  Un usuario registrado también puede usar la opción de compartir por correo electrónico, además de poder guardar las citas que quiera para luego verlas en su muro. También tiene la posibilidad de crear sus propias frases para compartirlas y guardarlas. Por último, para todo usuario es posible configurar la opciones de cambio de color al recibir una nueva frase, de mantener la edición luego de compartir una imagen o de cambiar permamente el formato de texto y colores de las citas, pudiendo aquellos registrados guardar sus preferencias.

  ## Motivación para el proyecto

  La princpial motivación para este proyecto fue el deseo de ser capaz de desarrollar utilizando el "stack" MERN. Comenzó como un desafío para [FreeCodeCamp](https://www.freecodecamp.org/andressiri), un [proyecto simple](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-random-quote-machine) para el [curso de librerias de desarollo frontend](https://www.freecodecamp.org/learn/front-end-development-libraries) que consiste en una sencilla ["máquina de citas"](https://codepen.io/freeCodeCamp/full/qRZeGZ). En principio este curso y el ejercicio sirven para estudiar y ejercitar las bases de teconologías como `Bootstrap`, `SASS`, `React`, `Redux`, and `jQuery`. Yo elegí enfocarme principalmente en aprender `React` al comienzo, más allá de los requerimientos para cumplir con las exigencias de FreeCodeCamp, utilizando hooks y React Context. Finalmente a medida que fui desarrollando la aplicación surgieron ideas de funcionalidades que ya no tenían nada que ver con el curso, pero que me servía implementarlas para capacitarme en las demás tecnologías que deseaba tener conocimiento: `MongoDB` (y `Mongoose`), `Express` y `Node`. 

  ## Estado actual

  El proyecto se encuentra funcionando a pesar de tener varias cosas para mejorar. La interfaz de usuario claramente podría mejorarse, pero nunca fue donde estuvo el foco durante el desarrollo. Se podrían elegir mejores colores y perfeccionar el tamaño de algunos elementos, siendo que, por ejemplo, algunas citas tienen una gran extensión, y si el usuario decide configurar su aplicación para verlas en mayúsculas y agranda la letra a veces pueden quedar por fuera de su espacio determinado. De todas formas, se considera que lo principal a mejorar de la experiencia de usuario es la interacción con el teclado de android.
  En cuanto al código, éste funciona correctamente pero es perfeccionable en varios aspectos. Para empezar, en el cliente el estado del contexto está en un solo proveedor en su totalidad, se realizó de esta manera porque resultaba ágil y práctico al momento de necesitar una nueva variable, ganando deuda, pero es posible y resultaría preferible para el código el crear otros porveedores para funcionalidades más específicas que no se requieren en toda la aplicación. En el servidor, el código de los controladores de los endpoints podría organizarse y escribirse con más claridad, incluso con otro orden de los directorios. A simple vista resulta necesaria una limpieza de console.log y evitar el anidamiento de condicionales. Sin embargo también sería enriquecedor usar `express-async-handler` y un middleware para manejar los errores. La mayoría de las cosas para arreglar en el código, en general, resultan en parte de que es una aplicación que fue creada a medida que nuevos conocimientos eran adquiridos, sin ser planeada ampliamente en un principio sino que fue creciendo con el pasar del tiempo. Para ver un código más organizado y con una estructura considerada desde el comienzo dirigirse a [este repositorio](https://github.com/andressiri/alkemy-full-stack). Finalmente, en lo que respecta a las funcionalidades sólo haría falta configurar el copiado de una imagen al portapapeles en android.

  ## Instalación

  Para instalar esta aplicación y probarla en desarrollo necesitas tener instaladas en tu computadora versiones actualizadas de `Node.js`, `NPM` y `Git` para poder:

  1. Crear e ir a un nuevo directorio.
  2. Inicializar un nuevo repositorio con el comando `git init`.
  3. Obtener este repositorio con el comando `git pull https://github.com/andressiri/quotes-machine`.
  4. Ir al directorio `/client` e instalar las dependencias con el comando `npm install`.
  5. Ir al directorio `/server` e instalar las dependencias con el comando `npm install` nuevamente.
  6. Crear la base de datos con [Mongo DB Atlas](https://www.mongodb.com/es/atlas/database)

      <details>

        <summary>Instrucciones</summary>

        
        1. Crear una cuenta en [Mongo DB Atlas](https://www.mongodb.com/es/atlas/database) e ingresar.
        2. Crear un proyecto o ir a un proyecto existente.
        
        ![ir a un proyecto](/assets/0%20Go%20to%20your%20project.png)
        
        3. Ir a construir una base de datos ("Build a Database").
        
        ![ir a build database](/assets/1%20Go%20to%20create%20database.png)
        
        4. Elegir la opción gratis.
        
        ![elige la opción gratis 1](/assets/2%20Choose%20free%20option%201.png)
        
        ![elige la opción gratis 2](/assets/3%20Choose%20free%20option%202.png)
        
        5. Definir el nombre del cluster (o apuntar que es Cluster0 por defecto) y crear la base de datos.
        
        ![nombre del cluster y creación](/assets/4%20Cluster%20name.png)
        
        6. Crear un usuario para autenticar la conexión.
        
        ![autenticar conexion](/assets/5%20Authenticate%20connection.png)
        
        7. Habilitar el acceso para ciertas redes o para todas con el IP 0.0.0.0/0.
        
        ![habilitar acceso de redes](/assets/6%20Enable%20access%20for%20networks.png)
        
        8. Conectar con la base de datos. Notar que la conexión es a partir de una cadena de caracteres (de configuración) que debe ser guardada como variable de entorno MONGO_URI en un archivo `.env`.
        
        ![conectar con base de datos](7%20Connect%20to%20database.png)
        
        ![opciones de conexión](8%20Connection%20options.png)
        
        ![cadena para conectar base de datos](9%20Connect%20to%20DB%20string.png)

      </details>

  7. Crear un archivo .env en el directorio raíz con las siguientes variables:
      <pre>  
        NODE_ENV = development
        MONGO_URI = mongodb+srv://<em><strong>< tu usuario creado ></strong></em>:<em><strong>< la contraseña del usuario ></strong></em>@<em><strong>< el nombre del cluster - default es cluster0 ></strong></em>.e2vjgvo.mongodb.net/?retryWrites=true&w=majority
        MAILER_MAIL = < tu dirección de email de <em><strong>gmail</strong></em> >
        MAIL_PASSWORD" = < tu "contraseña de aplicación" generada desde google > (no es la constraseña de tu email)  
      </pre>
      
      <details>

      <summary>Cómo generar una contraseña de aplicación en Google</summary>

      Para generar una nueva contraseña de aplicación seguir los siguientes pasos:

      1. En una nueva pestaña de Chrome ir a "Gestionar tu cuenta de Google".

          ![gestionar tu cuenta de google](/assets/README/gmail%20application%20password/1.%20Gestionar%20tu%20cuenta%20de%20Google.png)

      2. Ir a "Iniciar sesión en Google" en la sección de "Seguridad" y clickear en "Contraseñas de aplicaciones". Notar que es necesario tener la verificación en dos pasos activada para poder hacer esto.

          ![ir a contraseñas de aplicaciones](/assets/README/gmail%20application%20password/2.%20Ir%20a%20contrase%C3%B1as%20de%20aplicaciones.png)

      3. Crear una nueva constraseña de aplicación, el nombre es indistinto.

          ![crear una nueva constraseña de aplicación](/assets/README/gmail%20application%20password/3.%20Crear%20una%20nueva%20contrase%C3%B1a%20de%20aplicaci%C3%B3n.png)

      4. Obtener la nueva contraseña de aplicación creada.

          ![obtener la nueva contraseña de aplicación](/assets/README/gmail%20application%20password/4.%20Obtener%20la%20constrase%C3%B1a%20de%20aplicaci%C3%B3n.png)

      </details>
      
  8. Crear los datos para utilizar la aplicación con el archivo `createFakeDBData.js`
      <details>

        <summary>Instrucciones</summary>

        1. En el directorio `/server` correr el comando `node createFakeDBData.js`.
        
        ![ejecutar archivo createFakeDBData.js](/assets/0%20Excecute%20createFakeDBData.js.png)
        
        2. Para ver los datos creados y manipularlos ir a la colección creada.
        
        ![ir al cluster](/assets/1%20Go%20to%20your%20cluster.png)
        
        ![ir a colecciones](/assets/2%20Go%20to%20collections.png)

      </details>

  9. Finalmente, para correr el cliente en el puerto 3000 usar el comando `npm start` en el directorio `/client`, y para correr el servidor en el puerto 8080 usar el comando `npm run dev` en el directorio `server`.

  ## Documentación de la API

  La API que brinda el servidor, creada para la aplicación, está [documentada y publicada con Postman](https://documenter.getpostman.com/view/16003276/Uyxeonsr). Ahí puedes cargar y correr la API en postman directamente o usar postman en el navegador, utilizando el botón que dice "Run in Postman" ubicado en la esquina superior derecha de la ventana.

  <details>

  <summary> <a href="https://documenter.getpostman.com/view/16003276/Uyxeonsr"><img src="/assets/Run%20in%20postman%20button.png" alt="Run in Postman button" ></a> </summary>

  ![API postman documentation](/assets/API%20postman%20documentation.png)

  </details>

  ## Organización del código
  
  El código está organizado en archivos y directorios modularizando y reutilizando el código lo más posible, intentando seguir el principio DRY. Aunque aún quede mucho por corregir se intentó que los archivos y las funciones se ocupen de la menor cantidad de cosas posibles, siendo una sola cosa en concreto el ideal. A su vez se agruparon los archivos en diferentes directorio según su funcionalidad o la funcionalidad a la que pertenecen.

  ## Tecnologías utilizadas

  Esta sección lista las tecnologías o frameworks que fueron utilizados para hacer le proyecto, con una breve descripción y la razón o intención de utlizarlas.

  <details>

  <summary>Node JS</summary>

  [Node.js](https://nodejs.org/es) es un entorno de ejecución orientado a eventos asíncronos para JavaScript construido con [V8, motor de JavaScript de Chrome](https://v8.dev/), y diseñado para crear aplicaciones network escalables. Por supuesto Node.js tiene varios pros y contras comparado con otros lenguajes y frameworks con los que compite, pero las principales razones que explican por qué lo elegí para este pequeño proyecto son, primero, por la ventaja de poder utilizar "Javascript en todos lados", siendo que Node.js soporta Javascript tanto en el lado del cliente como en el lado del servidor, y segundo, el vasto repositorio de librerías al que se tiene acceso con Node Package Manager.

  </details>

  <details>

  <summary>Express</summary>

  [Express](https://expressjs.com/es) es una infraestructura web rápida, minimalista y flexible para Node.js que proporciona un conjunto sólido de prestaciones. La principal razón por la cual la elegí es que, sin agregar muchas restricciones, hace mucho más claro y fácil el control de las peticiones y las respuestas y el diseño de rutas con, como dice en su sitio oficial, "con miles de métodos de programa de utilidad HTTP y middleware a su disposición".

  </details>
  
  <details>

  <summary>MongoDB y Mongoose</summary>

  [MongoDB](https://www.mongodb.com/es) es una base de datos no relacional ("noSQL") que almacena documentos JSON (o registros) que puedes usar en tu aplicación. [Mongoose](https://mongoosejs.com/) es un paquete de NPM que suele instalarse junto a MongoDB, con el que, entre otras cosas, puedes utilizar objetos de Javascript en lugar de JSON para trabajar con la base de datos, facilitando ampliamente la tarea. Siendo parte del stack MERN y considerando las ventajas que ofrece para iniciar un proyecto con rapidez y sin dificultad, MongoDB sin duda era la elección correcta y Mongoose también por extensión.

  </details>

  <details>

  <summary>React JS</summary>

  [React](https://es.reactjs.org/) es una librería de Javascript de código abierto eficiente, declarativa, y flexible para construir interfaces de usuario simples, rápidas, y escalables para el frontend de aplicaciones web. Utiliza JSX que es una extensión de sintaxis de JavaScript que permite mezclar HTML, lo que facilita el desarrollo de componentes. He elegido aprender React como primer marco de trabajo (aunque sea una librería) de frontend en mi proceso de aprendizaje. Decidí hacerlo en su momento por recomendaciones, siendo que estoy de acuerdo con las razones que me dieron: que es más fácil de aprender y usar en un principio y que tiene un enorme potencial cuando se lo aprende en profundidad, que tiene un gran apoyo de la comunidad y que es empleado ampliamente en el mercado laboral IT; junto con otras ventajas tecnológicas como un renderizado rápido.

  </details>  
  
  <details>

  <summary>Passport</summary>

  [Passport](https://www.passportjs.org/) es un middleware de autenticación para Node.js, que puede ser utilizado sin problemas en cualquier aplicación hecha con Express. Con sus módulos facilita ampliamente el proceso de autenticación y autorización del usuario, simplificando también su manejo en el frontend. 

  </details>

  <details>

  <summary>Sass</summary>

  [Sass, or "Syntactically Awesome StyleSheets"](https://sass-lang.com/) es un lenguaje extensivo de CSS. Agrega funcionalidades que no están disponibles en el CSS básico que hacen más fácil el simplificar y mantener las hojas de estilo de los proyectos.

  </details>

  <details>

  <summary>Extra libraries</summary>

  - [bcryptjs](https://www.npmjs.com/package/bcryptjs): es una librería que ayuda a encriptar las constraseñas, para una mejor seguridad.
  - [express-session](https://www.npmjs.com/package/express-session): ayuda a crear un middleware de sesión, que necesitaba para poder almacenar el código y la dirección de correo electrónico para el proceso de verificación de identidad del usuario.
  - [connect-flash](https://www.npmjs.com/package/connect-flash): es una librería que utiliza el área "flash" de la sesión para almacenar mensajes, que serán eliminados luego de haberlos entregado al usuario.
  - [express-brute](https://www.npmjs.com/package/express-brute): es un middleware para protección de las rutas ante un ataque de "fuerza bruta" que limita las peticiones que recibe.
  - [nodemailer](https://nodemailer.com/about/): es un módulo para aplicaciones de Node.js que permite enviar correos elctrónicos de manera muy fácil.
  - [react-router-dom](https://v5.reactrouter.com/): es la librería de mapeo de rutas de React estándar, mantiene la Interfaz de Usuario en sintonía con la URL y tiene una colección de componentes de navegación.
  - [express-brute-mongoose](https://www.npmjs.com/package/express-brute-mongoose): es una adaptador de la tienda de Mongoose para ser utilizada por express-brute.
  - [moment](https://www.npmjs.com/package/moment): una librería de Javascript para analizar y convertir, validar, manipular y dar formato a fechas. 
  - [react-beforeunload](https://www.npmjs.com/package/react-beforeunload): Un componente y hook de React que escucha el evento beforeunload de la ventana.
  - [fontawesome](https://fontawesome.com/): es una librería de para manejar los íconos de la aplicación con facilidad.
  - [dom-to-image](https://www.npmjs.com/package/dom-to-image): es una librería que puede transformar una parte del DOM en un SVG, PNG o JPEG.

  </details>

***

</details>

***

<details>

  <summary>English</summary>

  An app to get random inspirational or reflexive quotes. You can request it manually or you can receive one automatically every 5/10/15 seconds. The last five quotes view will be stored in a gallery to see them again if pleased. You can also search for a quote (by content and/or author) in our database. If you want, you can share the phrase you like at Facebook, Twitter, Tumblr or copy it at clipboard to send it where you wish. You can do it in text or image formats, being able to previously edit in the second case.
  
  A registered user can use the option to share via email, in addition to being able to save the quotes it chooses to see later at it's wall. It also has the possibility to create it's phrases to share and save. At last, every user can configure the options of color changing after receiving a new quote, of mainting edition after sharing an image or changing permamently the text format and quotes colors, being those registered capable of saving their preferences.


  ## Motivation for the project  
  
  The main motivation for this project was the desire of being capable to develop using the MERN stack. It started as a challenge for [FreeCodeCamp](https://www.freecodecamp.org/andresiri), a [simple project](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-random-quote-machine) for the [frontend development libraries course](https://www.freecodecamp.org/learn/front-end-development-libraries), which consists of a ["quotes machine"](https://codepen.io/freeCodeCamp/full/qRZeGZ). At the beginning, this course and the exercise were useful to study and practice the basics of technologies such as `Bootstrap`, `SASS`, `React`, `Redux`, and `jQuery`. I chose to focus primarily on learning `React` first, beyond looking that FreeCodeCamp's requirements were fulfilled, using hooks and React Context. Finally, as I continued developing the application, ideas arose for functionalities that no longer had anything to do with the course, but it was beneficial for me to implement them to train myself in other technologies that I wanted to know about: `MongoDB` (and `Mongoose`), ` Express` and `Node`.

  ## Build status
  
  The project is working despite having several things to improve. The UI can clearly be enhaced, but the focus never was there during development. Better colors must be chosen and the size of some elements could be perfected, since, for example, some quotes have a large extension, and if the user decides to configure the application to see them in capital letters and enlarges the font, sometimes the text can excel the area it has determined. In any case, it is considered that the main thing that needs improvement in the user experience is the interaction with the android keyboard.  
  As for the code, it can be better in several aspects. To begin with, at the client, the state of the context is in a single provider in it's entirety, it was done this way because it was agile and practical when a new variable was needed, gaining debt, but it is possible and it would be desirable for the code to create other providers for more specific functionality that is not required throughout the whole application. At the server, the code and the organization for the endpoint drivers should be vastly refined in, including better directory layout. At first glance, it is necessary to clean the console.log(s) and avoid the conditionals nesting. However, they can also be improved by using `express-async-handler` and middleware to handle errors. Most of the things to upgrade in the code, in general, result in part from it being an application that was created at the time new knowledge was acquired, not being extensively planned at first but growing over time. To see a more organized code and with a structure considered from the beginning, go to [this repository](https://github.com/andresiri/alkemy-full-stack). Finally, regarding the functionalities, it would only be necessary to configure the copying of an image to the clipboard in android.

  # README In progress

	For further sections refer to spanish version.

</details>