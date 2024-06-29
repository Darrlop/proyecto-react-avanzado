# Proyecto React Avanzado con Redux

EL proyecto se ha trabajado en base al proyecto suministrado por el profesor.

Se ha realizado únicamente la adaptación de la aplicación React a redux.

La parte de test no ha podido realizarse, quedando para una segunda entrega.

Se hace esta 1ª entrega para obtener un feedback de la parte de adaptación y sobre los problemas encontrados en ella.

***En esta parte ha habido un problema grave que no ha podido ser resuelto:***

- AL borrar un anuncio, se produce un error. Parece ser que, tras el borrado, que es realizado con éxito, el programa vuelve a entrar en advertPage.js y lee el id del anuncio eliminado, llevándolo a advertsPage.js, donde es usado en vez de la cadena de objetos que componen el listado de anuncios general.

---




This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).