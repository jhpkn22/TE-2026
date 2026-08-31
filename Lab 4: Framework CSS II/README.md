# Mini App de Noticias - Bootstrap vs Tailwind

Tarea de Tecnologias Emergentes, Quinto Semestre - FIUNI (UNI)
Profesor: Mg. Ing. Raul Benitez Netto

Alumno:
Fecha:

## De que se trata

Es una app web sencilla que trae datos de una API publica y los muestra en tarjetas.
Hice la misma app dos veces, una con Bootstrap y otra con Tailwind, para poder comparar
como se trabaja con cada framework.

La API que use es https://jsonplaceholder.typicode.com/posts porque no necesita API KEY.
Los posts los muestro como si fueran noticias y con /users saco el nombre del autor.

## Archivos

- `index.html` - portada con los links a las dos versiones
- `bootstrap.html` - version con Bootstrap 5 (CDN)
- `tailwind.html` - version con Tailwind (CDN)

Se abren con doble clic, no hace falta instalar nada, pero si hay que tener internet
porque los frameworks y los datos se bajan de la red.

## Que hace la app

- Lista de noticias en tarjetas, 3 columnas en la compu, 2 en tablet y 1 en el celular
- Buscador por titulo
- Filtro por autor
- Boton "Ver mas" que abre un modal con la noticia completa
- Spinner mientras carga y mensaje de error si falla el fetch

## Comparacion de los dos frameworks

| | Bootstrap | Tailwind |
|---|---|---|
| Grilla | row + col, siempre 12 columnas | grid-cols-2, grid-cols-3, las que quieras |
| Tarjeta | clase card y ya viene lista | hay que armarla con bg-white, shadow, rounded, p-6 |
| Modal | componente, se abre con bootstrap.Modal() | lo hice a mano con hidden y una funcion en JS |
| Navbar | navbar-toggler y collapse ya funcionan | hay que hacerlo con flex |
| JS | necesita el bundle de bootstrap | no necesita nada del framework |

Conclusion: con Bootstrap termine mas rapido porque el modal y el navbar ya venian hechos,
pero todas las paginas de Bootstrap se parecen entre si. Con Tailwind escribi mas clases en
el HTML y tuve que programar el modal, pero el diseno queda como uno quiere sin tener que
pisar los estilos del framework.
