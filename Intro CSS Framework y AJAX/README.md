# Galeria de Gatos con AJAX

Tarea de Tecnologias Emergentes, Quinto Semestre - FIUNI (UNI)
Profesor: Mg. Ing. Raul Benitez Netto

Alumno:
Fecha:

## De que se trata

Galeria de imagenes que trae los gatos de una API publica usando AJAX con JavaScript puro,
sin usar ningun framework CSS. Todo el estilo esta hecho a mano en `css/estilos.css`.

API usada: https://api.thecatapi.com/v1/images/search?limit=10
Devuelve un array de objetos y de cada uno saco la propiedad `url`.

## Estructura

```
galeria-gatos/
├── index.html
├── css/
│   └── estilos.css
└── js/
    └── app.js
```

Separe el HTML, el CSS y el JS en archivos distintos para que quede mas ordenado.

## Como funciona

1. El usuario elige la cantidad y hace clic en el boton (evento)
2. JavaScript manda la peticion GET a la API con `fetch`, sin recargar la pagina
3. Se revisa `respuesta.ok` porque fetch no falla solo con los errores 404 o 500
4. La respuesta se convierte a JSON con `.json()`
5. Se recorre el array y se van creando las imagenes con `createElement`

Mientras carga se muestra un mensaje y se desactiva el boton, y si algo falla se
muestra el error en rojo (esta todo dentro de un try/catch).

## Estilos

- La galeria usa CSS Grid, 4 columnas en la compu
- Con media queries pasa a 2 columnas en tablet y 1 en el celular
- Las imagenes usan `object-fit: cover` para que todas queden del mismo tamano
  aunque la API las mande en distintas medidas
- Efecto hover con un scale chiquito

## Como probarlo

Abrir `index.html` con doble clic. Hace falta internet porque las imagenes vienen de la API.
