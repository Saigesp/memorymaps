# memorymaps
Conjunto de mapas realizado para el Instituto 25M

**Versión lista para servir:** Archivo [dist.zip](/dist.zip)

## Estructura

Desarrollado con Vue, D3 y Leaflet.

Node, Webpack, Babel y otros usados en el desarrollo.

## Servidor de desarrollo (con hot reloading)

``` bash
npm install

npm run dev
```

## Generar build

``` bash
npm run build
```

## Servidor externo para levantar build

**Python 3**

Dentro de la carpeta `dist` del proyecto:

``` bash
python3 -m http.server
```

**Nodejs**

Ejecutar en el directorio `dist` del proyecto:

``` bash
npm install http-server -g
http-server
```
