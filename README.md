# memorymaps
Conjunto de mapas realizado para el Instituto 25M

## Estructura
Se compone de tres mapas independientes entre si: `fortress/`, `money/` y `memory/`, y una pequeña landing (archivos `index.html` y carpeta `assets/` )

Cada mapa contiene en su interior los archivos html/js/css necesarios para su funcionamiento.

Cada mapa contiene un archivo de datos `nombre_mapa/assets/data/data.json` desde el que se puede cambiar el contenido.

## Ver mapa en desarrollo

Debido a la política [CORS](https://developer.mozilla.org/es/docs/Web/HTTP/Access_control_CORS) en algunos navegadores (Chrome) no se visualiza directamente el contenido si no está en un servidor web. 

Se recomienda desarrollar con **Firefox**. o levantar un servidor local. Para levantar un servidor local:

**Python 3**

Ejecutar en la raíz del proyecto:

```sh
python3 -m http.server
```

Abrir [http://localhost:8000/](http://localhost:8000/)

**Nodejs**

Instalar globalmente [http-server]() y ejecutar en el directorio del proyecto:

    npm install http-server -g
    http-server

Abrir [http://localhost:8080/](http://localhost:8080/)


# newmemory

> A Vue.js project


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
