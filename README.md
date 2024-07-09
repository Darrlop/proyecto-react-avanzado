# Proyecto React Avanzado con Redux


Este proyecto se basa en una aplicación web desarrolada con **React** y que se conecta a un backend existente, nodepop, el mismo que se utilizó en la práctica de fundamentos. Las implementaciones principales que ofrece son un sistema de gestión de anuncios, con funcionalidades como autenticación de usuarios, obtención de anuncios, creación y borrado de anuncios, y más.

La aplicación utilizada ha sido la resolución del profesor de la práctica de Fundamentos React

__EL objetivo principal del proyecto__ es partir de dicha aplicación  **React** y adaptarla a  **Redux**, con todas las ventajas que esto ofrece: gestión de estados en aplicaciones React, mediante una estructura sólida y seguridad en el manejo de estados, y el acceso global a los datos.

También incluyé un apartado de testing, donde habrá una muestra de los principales tipos test usados en una aplicación de este tipo

## Objetivos de la práctica conseguidos

1. **Configurar un store Redux**:
   - Almacenar la información sobre la sesión o el usuario registrado en el sistema.
   - Leer el token desde el LocalStorage al iniciar la aplicación (si existe) y almacenarlo en el store de Redux.
   - Guardar el estado de la sesión en el store de Redux al hacer login (siempre) y en el Local Storage si se eligió recordar la sesión.
   - Manejar la obtención de tags disponibles y de anuncios desde el API.
   - Modelar correctamente el estado que se va a guardar en el store.

2. **Crear acciones y reducers**:
   - Implementar las acciones y reducers necesarios para cumplir los objetivos del punto 1.
   - Asegurarse de que las acciones sean síncronas o asíncronas según corresponda.

3. **Conectar los componentes con el store de Redux**:
   - Utilizar `connect` o hooks (como `useSelector` y `useDispatch`) para conectar los componentes con el store.
   - Acceder a la información almacenada en el store desde los componentes.

4. **Configurar Redux Dev Tools**:
   - Facilitar las tareas de debugging de la aplicación utilizando la extensión de Redux Dev Tools en el navegador.

5. **Testing**:
   - Crear tests unitarios para verificar el correcto funcionamiento de diferentes partes de la aplicación:
     1. Una acción síncrona.
     2. Una acción asíncrona.
     3. Un reducer.
     4. Un selector.
     5. Un componente con snapshot testing.
     6. Comprobar el funcionamiento de un componente que ejecuta una acción del store, mockeando la acción.
  
    Los 4 primeros tipos de test están ubicados en la carpeta /src/stores/__ test __

    Las 2 últimos están implementadas en un mismo fichero, alojado en /src/pages/auth/components/__ tests __

## Instrucciones de instalación y ejecución

Este proyecto se creó con [Create React App](https://github.com/facebook/create-react-app).

__Prerrequisitos:__

Tener instalado en tu sistema:
- Node.js
- npm
- MongoDB

__Instalar la api Nodepop:__

- Clona el repositorio de Nodepop desde GitHub:

  `git clone https://github.com/davidjj76/nodepop-api`

- Instala las dependencias:
  
  `npm install`

- Ejecuta:
  
  `npm run start`

__Instalar y ejecutar el proyecto Redux:__

1. Clonar/descargar este repositorio.

   `git clone https://github.com/Darrlop/proyecto-react-avanzado`

2. Instalar las dependencias

   `npm install`.

3. Ejecutar la aplicación 
  
   `npm run start`.

   Esto ejecuta la aplicación en modo de desarrollo. Será accesible en un navegador en la dirección [http://localhost:3000](http://localhost:3000)

   La página se recargará si realizas modificaciones. También verás errores de lint en la consola.

__Testing:__

  - Ejecutar la aplicación en modo testing
  
    `npm run test`.

    Esto ejecuta los test en la terminal. Verificar que se ejecutan todos mediante la opción "Press a to run all tests", una vez arrancado.

    El resultado que debe mostrar es:

    - Test Suites: 4 passed, 4 total
    - Tests:       12 passed, 12 total
    - Snapshots:   1 passed, 1 total`
  


## Opciones de desarrollo futuro

- Extraer la lógica común a todos los formularios presentes en la aplicación y reutilizarlo en todos ellos, creando unos componentes
 que mantengan los valores del formulario y que reciban el valor que le corresponde, así como poder modificar ese valor en el evento on Change

 - Implementación de css para dar un diseño responsive atráctivo a la aplicación 

## Otros

Sobre Create React App:  [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

Sobre React [React documentation](https://reactjs.org/).