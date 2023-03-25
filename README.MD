
# [<img src="./assets/quotes512.png" alt="Quotes logo" width="30"/>](#) Quotes Machine

<details>

  <summary>Español</summary>
  
  ## Ir al sitio
  
  Es muy probable que el hosting del sitio no funcione del todo bien. Esto se debe a que los hosting son gratuitos y es probable que si no se ha ingresado en un tiempo (bastante corto) tarde en responder el servidor:
  
   * Con [Railway](https://railway.app/) posiblemente aparezca un error, pero no quiere decir que no funcione. Puede entonces tardar entre un minuto o dos en responder adecuadamente desde la primera vez que se ingresa. Luego de esto, debería funcionar correctamente: [Ir al sitio en Railway](https://quotes-machine-production.up.railway.app/)
   
   * Con [Render](https://render.com/) es probable que tarde alrededor de 30 segundos en cargar la apicación, y una vez cargada suele andar mal un par de minutos: [Ir al sitio en Render](https://as-quotes-machine.onrender.com/) 
   
  ### Usuario de prueba
  
  Usuario: fakeuser@mail.com
  
  Contraseña: 123456
  
  * El ingreso puede fallar al principio hasta que cargue bien la página, por los mismos motivos aclarados antes.
  
  ## Tener en consideración:

  Esta aplicación tiene muchas cosas que mejorar. Fue uno de mis primeros proyectos y lo hice antes de aprender muchos conceptos de UX/UI y sin prestar mucha atención al diseño. El objetivo era aprender las tecnologías utilizadas más que crear una aplicación realmente útil.

  ## Descripción

  Una aplicación para obtener aleatoriamente citas inspiradoras o para reflexionar. Puedes hacerlo manualmente o recibir una automáticamente cada 5/10/15 segundos. Las ultimas 5 frases visualizadas serán guardadas en una galería para poder verlas nuevamente. También puedes buscar una cita (por contenido y/o por autor) en nuestra base de datos. Si quieres puedes compartir las frases en Facebook, Twitter, Tumblr o copiarla en el portapapeles para enviarla por el medio que desees. Puedes hacerlo en formato de texto o de imagen, con la opción de editar previamente en el segundo caso.
  
  Un usuario registrado también puede usar la opción de compartir por correo electrónico, además de poder guardar las citas que quiera para luego verlas en su muro. También tiene la posibilidad de crear sus propias frases para compartirlas y guardarlas. Por último, para todo usuario es posible configurar la opciones de cambio de color al recibir una nueva frase, de mantener la edición luego de compartir una imagen o de cambiar permamente el formato de texto y colores de las citas, pudiendo aquellos registrados guardar sus preferencias.

  ## Motivación para el proyecto

  La princpial motivación para este proyecto fue el deseo de ser capaz de desarrollar utilizando el "stack" MERN. Comenzó como un desafío para [FreeCodeCamp](https://www.freecodecamp.org/andressiri), un [proyecto simple](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-random-quote-machine) para el [curso de librerias de desarollo frontend](https://www.freecodecamp.org/learn/front-end-development-libraries) que consiste en una sencilla ["máquina de citas"](https://codepen.io/freeCodeCamp/full/qRZeGZ). En principio este curso y el ejercicio sirven para estudiar y ejercitar las bases de teconologías como `Bootstrap`, `SASS`, `React`, `Redux`, and `jQuery`. Yo elegí enfocarme principalmente en aprender `React` al comienzo, más allá de los requerimientos para cumplir con las exigencias de FreeCodeCamp, utilizando hooks y React Context. Finalmente a medida que fui desarrollando la aplicación surgieron ideas de funcionalidades que ya no tenían nada que ver con el curso, pero que me servía implementarlas para capacitarme en las demás tecnologías que deseaba tener conocimiento: `MongoDB` (y `Mongoose`), `Express` y `Node`.
  
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

  <summary>Librerías extra</summary>

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

  ## Estado actual de la aplicación

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
        
        ![conectar con base de datos](/assets/7%20Connect%20to%20database.png)
        
        ![opciones de conexión](/assets/8%20Connection%20options.png)
        
        ![cadena para conectar base de datos](/assets/9%20Connect%20to%20DB%20string.png)

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

          ![gestionar tu cuenta de google](/assets/1.%20Gestionar%20tu%20cuenta%20de%20Google.png)

      2. Ir a "Iniciar sesión en Google" en la sección de "Seguridad" y clickear en "Contraseñas de aplicaciones". Notar que es necesario tener la verificación en dos pasos activada para poder hacer esto.

          ![ir a contraseñas de aplicaciones](/assets/2.%20Ir%20a%20contrase%C3%B1as%20de%20aplicaciones.png)

      3. Crear una nueva constraseña de aplicación, el nombre es indistinto.

          ![crear una nueva constraseña de aplicación](/assets/3.%20Crear%20una%20nueva%20contrase%C3%B1a%20de%20aplicaci%C3%B3n.png)

      4. Obtener la nueva contraseña de aplicación creada.

          ![obtener la nueva contraseña de aplicación](/assets/4.%20Obtener%20la%20constrase%C3%B1a%20de%20aplicaci%C3%B3n.png)

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

  ## Organización del código
  
  El código está organizado en archivos y directorios modularizando y reutilizando el código lo más posible, intentando seguir el principio DRY. Aunque aún quede mucho por corregir se intentó que los archivos y las funciones se ocupen de la menor cantidad de cosas posibles, siendo una sola cosa en concreto el ideal. A su vez se agruparon los archivos en diferentes directorios según su funcionalidad o la funcionalidad a la que pertenecen. Hay bastantes cosas a mejorar al respecto, pero debe tenerse en cuenta que este fue uno de mis primeros proyectos, para una mejor organización referirse a proyectos más recientes.

***

</details>

***

<details>

  <summary>English</summary>
  
  ## Go to site
  
  It is very likely that the hosting of the site is not working properly. This is because the hosting is free and it is probable that if the had not been used for certain (fairly short) time, it will take a while for the server to respond:
  
   * With [Railway](https://railway.app/) you may possibly get an error, but it doesn't mean it won't work. It will then take a minute or two for the server to respond properly from the first time you tried to enter. After that, it should work fine: [Go to site on Railway](https://quotes-machine-production.up.railway.app/)
   
   * With [Render](https://render.com/) it is likely to take about 30 seconds to load the application, and once it is loaded it usually runs poorly for a couple of minutes: [Go to site in Render](https://as-quotes-machine.onrender.com/)
   
  ### Test user
  
  User: fakeuser@mail.com
  
  Password: 123456
  
  * Login may fail until page loads properly. for same reasons stated before.
  
  ## To take in consideration:

  This app has many things to improve. It was one of my firsts projects and it was done before learning many UX/UI concepts and without paying much attetion to design. The porpouse of this app was to learn the technologies used more than creating a really useful app.
  
  ## Description

  An app to get random inspirational or reflexive quotes. You can request it manually or you can receive one automatically every 5/10/15 seconds. The last five quotes view will be stored in a gallery to see them again if pleased. You can also search for a quote (by content and/or author) in our database. If you want, you can share the phrase you like at Facebook, Twitter, Tumblr or copy it at clipboard to send it where you wish. You can do it in text or image formats, being able to previously edit in the second case.
  
  A registered user can use the option to share via email, in addition to being able to save the quotes it chooses to see later at it's wall. It also has the possibility to create it's phrases to share and save. At last, every user can configure the options of color changing after receiving a new quote, of mainting edition after sharing an image or changing permamently the text format and quotes colors, being those registered capable of saving their preferences.


  ## Motivation for the project  
  
  The main motivation for this project was the desire of being capable to develop using the MERN stack. It started as a challenge for [FreeCodeCamp](https://www.freecodecamp.org/andresiri), a [simple project](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-random-quote-machine) for the [frontend development libraries course](https://www.freecodecamp.org/learn/front-end-development-libraries), which consists of a ["quotes machine"](https://codepen.io/freeCodeCamp/full/qRZeGZ). At the beginning, this course and the exercise were useful to study and practice the basics of technologies such as `Bootstrap`, `SASS`, `React`, `Redux`, and `jQuery`. I chose to focus primarily on learning `React` first, beyond looking that FreeCodeCamp's requirements were fulfilled, using hooks and React Context. Finally, as I continued developing the application, ideas arose for functionalities that no longer had anything to do with the course, but it was beneficial for me to implement them to train myself in other technologies that I wanted to know about: `MongoDB` (and `Mongoose`), ` Express` and `Node`.
  
  ## Technologies used

  This section lists technologies or frameworks that have been used to do the project, with a brief description and the reason or intention of using them.

  <details>

  <summary>Node JS</summary>

  [Node.js](https://nodejs.org/) is an asynchronous event-driven JavaScript runtime built on [Chrome's V8 JavaScript engine](https://v8.dev/) designed to build scalable network applications. Of course Node.js has many pros and cons compared with other copeting languages and frameworks, but the main reasons that explain why I chose it for this small project are, first, because of the "Javascript everywhere" advantage, as Node.js supports JavaScript both client-side and server-side, and second, the vast libraries repository you can access with the Node Package Manager.

  </details>

  <details>

  <summary>Express</summary>

  [Express](https://expressjs.com/) is a fast, unopinionated and minimalist web framework for Node.js that provides a robust set of features. The main reason I chose it is because, without adding many restrictions, it makes much more clear and easier to control requests and responses and to design routes with, as it says in it's official site, "a myriad of HTTP utility methods and middleware at your disposal".

  </details>
  
  <details>

  <summary>MongoDB & Mongoose</summary>

  [MongoDB](https://www.mongodb.com/) is a non-relational database ("noSQL") that stores JSON documents (or records) that you can use in your application. [Mongoose](https://mongoosejs.com/) is an NPM package that is usually installed together with MongoDB, with which, among other things, you can use Javascript objects instead of JSON to work with the database, making the task much easier. Being part of the MERN stack and considering the advantages it offers to start a project quickly and without difficulty, MongoDB was undoubtedly the right choice and Mongoose also by extension.

  </details>

  <details>

  <summary>React JS</summary>

  [React](https://reactjs.org/) is an efficient, declarative, and flexible open source JavaScript library for building simple, fast, and scalable user interfaces for frontend web applications. It uses JSX which is a JavaScript syntax extension that allows mixing HTML, which facilitates component development. I chose to learn React as my first frontend framework (even though it is a library) in my learning process. I decided to do it at the time because of recommendations, being that I agree with the reasons I was given: that it is easier to learn and use in the beginning and that it has a huge potential when learned in depth, that it has great community support and that it is widely employed in the IT job market; along with other technological advantages such as fast rendering.

  </details>  
  
  <details>

  <summary>Passport</summary>

  [Passport](https://www.passportjs.org/) is an authentication middleware for Node.js, which can be used seamlessly in any application made with Express. With its modules it greatly facilitates the user authentication and authorization process, simplifying also its handling in the frontend.

  </details>

  <details>

  <summary>Sass</summary>

  [Sass, or "Syntactically Awesome StyleSheets"](https://sass-lang.com/) is an extensive CSS language. It adds functionality not available in basic CSS that makes it easier to simplify and maintain project stylesheets.

  </details>

  <details>

  <summary>Extra libraries</summary>

  - [bcryptjs](https://www.npmjs.com/package/bcryptjs): it is a library that helps hash passwords, for a better security.
  - [express-session](https://www.npmjs.com/package/express-session): helps create a session middleware, that I needed to store the code and the email address for user identity verification process.
  - [connect-flash](https://www.npmjs.com/package/connect-flash): is a library that uses the "flash" area of the session to store messages, which will be deleted after they have been delivered to the user.
  - [express-brute](https://www.npmjs.com/package/express-brute): is a middleware for route protection against a "brute force" attack that limits the requests it receives.
  - [nodemailer](https://nodemailer.com/about/): is a module for Node.js applications to allow easy as cake email sending.
  - [react-router-dom](https://v5.reactrouter.com/): is the standard routing library for React, it keeps your UI in sync with the URL and has a collection of navigational components.
  - [express-brute-mongoose](https://www.npmjs.com/package/express-brute-mongoose): is a Mongoose store adapter to be used by express-brute.
  - [moment](https://www.npmjs.com/package/moment): a Javascript library for parsing and converting, validating, manipulating and formatting dates.
  - [react-beforeunload](https://www.npmjs.com/package/react-beforeunload): React component and hook which listens to the beforeunload window event.
  - [fontawesome](https://fontawesome.com/): is a library to manage application icons with ease.
  - [dom-to-image](https://www.npmjs.com/package/dom-to-image): is a library that can transform a part of the DOM into an SVG, PNG or JPEG.

  </details>

  ## Build status
  
  The project is working despite having several things to improve. The UI can clearly be enhaced, but the focus never was there during development. Better colors must be chosen and the size of some elements could be perfected, since, for example, some quotes have a large extension, and if the user decides to configure the application to see them in capital letters and enlarges the font, sometimes the text can excel the area it has determined. In any case, it is considered that the main thing that needs improvement in the user experience is the interaction with the android keyboard.  
  As for the code, it can be better in several aspects. To begin with, at the client, the state of the context is in a single provider in it's entirety, it was done this way because it was agile and practical when a new variable was needed, gaining debt, but it is possible and it would be desirable for the code to create other providers for more specific functionality that is not required throughout the whole application. At the server, the code and the organization for the endpoint drivers should be vastly refined in, including better directory layout. At first glance, it is necessary to clean the console.log(s) and avoid the conditionals nesting. However, they can also be improved by using `express-async-handler` and middleware to handle errors. Most of the things to upgrade in the code, in general, result in part from it being an application that was created at the time new knowledge was acquired, not being extensively planned at first but growing over time. To see a more organized code and with a structure considered from the beginning, go to [this repository](https://github.com/andresiri/alkemy-full-stack). Finally, regarding the functionalities, it would only be necessary to configure the copying of an image to the clipboard in android.

  ## Installation

  To install this application and test it in development you need to have updated versions of `Node.js`, `NPM` and `Git` installed on your computer in order to be able to:

  1. Create and go to a new directory.
  2. Initialize a new repository with `git init` command.
  3. Obtain this repository with the command `git pull https://github.com/andressiri/quotes-machine`.
  4. Move to `/client` directory and install the dependencies with the command `npm install`.
  5. Move to `/server` directory and install the dependencies with the command `npm install` again.
  6. Create the database with [Mongo DB Atlas](https://www.mongodb.com/atlas/database)

      <details>

        <summary>Instructions</summary>
        
        1. Create an account at [Mongo DB Atlas](https://www.mongodb.com/atlas/database) and log in.
        2. Create a project or go to an existant project.
        
        ![go to your project](/assets/0%20Go%20to%20your%20project.png)
        
        3. Go to "Build a Database".
        
        ![go to create database](/assets/1%20Go%20to%20create%20database.png)
        
        4. Choose free option.
        
        ![choose free option 1](/assets/2%20Choose%20free%20option%201.png)
        
        ![choose free option 2](/assets/3%20Choose%20free%20option%202.png)
        
        5. Define cluster name (or write down that is Cluster0 by default) and create database.
        
        ![cluster name and creation](/assets/4%20Cluster%20name.png)
        
        6. Create and user for conection authentication.
        
        ![authenticate conection](/assets/5%20Authenticate%20connection.png)
        
        7. Enable access for certain networks or for everyone with IP 0.0.0.0/0.
        
        ![enable networks access](/assets/6%20Enable%20access%20for%20networks.png)
        
        8. Conect with database. Notice that conection is done with a `config string` that must be saved as an environment variable named MONGO_URI at a `.env` file.
        
        ![conect with database](/assets/7%20Connect%20to%20database.png)
        
        ![conection options](/assets/8%20Connection%20options.png)
        
        ![string for database conection](/assets/9%20Connect%20to%20DB%20string.png)

      </details>

  7. Create `.env` file at root directory with the following variables:
      <pre>  
        NODE_ENV = development
        MONGO_URI = mongodb+srv://<em><strong>< your user ></strong></em>:<em><strong>< your user password ></strong></em>@<em><strong>< your cluster name - default is cluster0 ></strong></em>.e2vjgvo.mongodb.net/?retryWrites=true&w=majority
        MAILER_MAIL = < your email address from <em><strong>gmail</strong></em> >
        MAIL_PASSWORD" = < your "application password" generated with google > (not your email password)  
      </pre>
      
      <details>

      <summary>How to generate application password</summary>

      To generate a new application password follow the next steps:
      
      1. In a new Chrome tab go to "Manage your Google Account".

          ![go to Manage your Google Account](/assets/1.%20Manage%20your%20google%20account.png)

      2. Go to "Signing in to Google" in the "Security" section and click into "App passwords". Notice you must have your 2-Step Verification activated in order to do this.

          ![go to app passwords](/assets/2.%20Go%20to%20app%20passwords.png)

      3. Create a new application password, you can name it as you want.

          ![create a new application password](/assets/3.%20Create%20a%20new%20application%20password.png)

      4. Get the new password created.

          ![get the new password](/assets/4.%20Get%20the%20new%20password.png)

      </details>
      
  8. Create data to use the app with the `createFakeDBData.js` file.
      <details>

        <summary>Instructions</summary>

        1. At the `/server` directory run the command `node createFakeDBData.js`.
        
        ![excecute createFakeDBData.js](/assets/0%20Excecute%20createFakeDBData.js.png)
        
        2. To see created data and manipulate it go to the created collection.
        
        ![go to your cluster](/assets/1%20Go%20to%20your%20cluster.png)
        
        ![go to collections](/assets/2%20Go%20to%20collections.png)

      </details>

  9. Finally, to run client at port 3000 use the command `npm start` at `/client` directory, and for running the server at port 8080 run the `npm run dev` command at `server` directory.

  ## Code arrangement
  
  The code is organized in files and directories modularizing and reusing it as much as possible, trying to follow the DRY principle. Although there is still a lot to be corrected, I tried to make the files and functions deal with as few things as possible, being only one thing in particular the ideal. At the same time the files were grouped in different directories according to their functionality or the functionality to which they belong. There are quite a few things to improve in this regard, but it should be noted that this was one of my first projects, for better organization refer to more recent projects.

</details>
