# The Sheriff - frontend

## Como levantar el proyecto

Este proyecto consta de dos partes, un frontend y un backend.

- [Repo Front](https://github.com/fabihasu/SheriffFlix)
- [Repo Back]
  (https://github.com/fabihasu/SheriffFlix-backend)

## Levantar backend

- Clonar proyecto frontend:
  `git clone https://github.com/fabihasu/SheriffFlix-backend`
- Instalar dependencias:
  `npm install`
- Renombrar `.env.example` por `.env` (quitar .example del nombre del archivo)
- En el archivo `.env` reemplazar los valores de los campos `TMDB_API_KEY` y `DATABASE_URL` por los valores enviados por correo.
- Levantar proyecto: `npm start`

## Levantar frontend

- Clonar proyecto frontend:
  `git clone https://github.com/fabihasu/SheriffFlix.git`
- Instalar dependencias:
  `npm install`
- Levantar proyecto: `npm start`

## Probar aplicacion

- Comprobar que la aplicación backend esté corriendo en el puerto 3006
- Comprobar que la aplicación frontend esté corriendo en el puerto 3000
- Abrir la página http://localhost:3000/

## Login

Para poder entrar a la aplicación es necesario loguearse con:

- E-mail: `novoemail@example.com`
- password: `senhasegura123`

## Listar películas

Solo abrir la página en http://localhost:3000/ se cargará automaticamente las 20 películas más populares

## Buscar películas

En la parte superior derecha hay un campo de búsqueda, en la cual puedes agregar cualquier nombre y al hacer click en buscar se mostrarán los resultados correspondientes al nombre ingresado

## Detalle de películas

Cuando haces click en alguna película, se redirecionará a una nueva página donde se mostrará más detalles de la película seleccionada

## Agregar a favoritos

Cuando se muestra el detalle de una película se puede hacer click en un botón para agregar la película a tus favoritos.

## Remover de favoritos

Si la película ya está agregada en la lista de favoritos, entonces el botón cambiará a "Remover de mis favoritos", y al hacer click se eliminará la película de tus favoritos.

## Ver mis favoritos

En la parte superior izquierda, al lado del home, hay un texto "Favoritos" el cual al hacer click te redireccionará a la [página de favoritos](http://localhost:3000/favorites)
En esta página puedes ver la lista de las películas que tienes guardado en favoritos
