const btnInicio = document.getElementById("btn-inicio");

btnInicio.addEventListener("click", () => {
    window.location.href = "/pages/index.html";
});

import { getAdmin, postAdmin, patchAdmin, deleteAdmin } from "../servicio_adminjs/admin.js";
localStorage.setItem("Peliculas", JSON.stringify(peliculas));
mostrarPeliculas();

async function mostrarPeliculas() {
    const peliculas = await getAdmin("Peliculas");
    console.log("Películas en cartelera:", peliculas);
}
agregarPelicula();
async function agregarPelicula(nuevaPelicula) {
    const resultado = await postAdmin("Peliculas", nuevaPelicula);
    console.log("Pelicula agregada:", resultado);
}
actualizarPelicula();
async function actualizarPelicula(id, datosActualizados) {
    const resultado = await patchAdmin("Peliculas", id, datosActualizados);
    console.log("Pelicula actualizada:", resultado);
}
eliminarPelicula();
async function eliminarPelicula(id) {
    const resultado = await deleteAdmin("Peliculas", id);
    console.log("Pelicula eliminada:", resultado);
}