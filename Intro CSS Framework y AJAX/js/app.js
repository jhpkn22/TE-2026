// Galeria de Gatos
// Consumo la API con AJAX usando fetch + async/await (como vimos en clase)

const URL_API = "https://api.thecatapi.com/v1/images/search";

const btnCargar = document.getElementById("btnCargar");
const selectCantidad = document.getElementById("cantidad");
const divGaleria = document.getElementById("galeria");
const pMensaje = document.getElementById("mensaje");

btnCargar.addEventListener("click", cargarGatos);

async function cargarGatos() {
  const cantidad = selectCantidad.value;

  // mientras carga aviso al usuario y bloqueo el boton
  btnCargar.disabled = true;
  divGaleria.innerHTML = "";
  mostrarMensaje("Cargando gatos...", false);

  try {
    // 1. peticion GET a la API
    const respuesta = await fetch(URL_API + "?limit=" + cantidad);

    // 2. fetch no falla con los errores 404 o 500, hay que revisar el ok
    if (!respuesta.ok) {
      throw new Error("Error HTTP: " + respuesta.status);
    }

    // 3. convierto la respuesta a JSON
    const gatos = await respuesta.json();

    // 4. actualizo la pagina con los datos
    mostrarGatos(gatos);
    mostrarMensaje("Se cargaron " + gatos.length + " gatos.", false);

  } catch (error) {
    console.error(error);
    mostrarMensaje("No se pudieron cargar los gatos. " + error.message, true);
  }

  btnCargar.disabled = false;
}

// recorro el array y voy armando las imagenes
function mostrarGatos(gatos) {
  for (let i = 0; i < gatos.length; i++) {
    const img = document.createElement("img");
    img.src = gatos[i].url;
    img.alt = "Gato " + (i + 1);
    divGaleria.appendChild(img);
  }
}

function mostrarMensaje(texto, esError) {
  pMensaje.textContent = texto;

  if (esError) {
    pMensaje.classList.add("error");
  } else {
    pMensaje.classList.remove("error");
  }
}
