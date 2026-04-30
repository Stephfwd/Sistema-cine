const btnInicio = document.getElementById("btn-inicio");

btnInicio.addEventListener("click", () => {
    window.location.href = "/pages/index.html";
});

import { getAdmin, postAdmin, patchAdmin, deleteAdmin } from "../servicio_adminjs/admin.js";

localStorage.setItem("Salas", JSON.stringify(salas));

mostrarSalas();
async function mostrarSalas() {
    const salas = await getAdmin("Salas");
    console.log("Listado de salas:", salas);
}
agregarSala();
async function agregarSala(nuevaSala) {
    const resultado = await postAdmin("Salas", nuevaSala);
    console.log("Sala agregada:", resultado);
}
actualizarSala();
async function actualizarSala(id, datosActualizados) {
    const resultado = await patchAdmin("Salas", id, datosActualizados);
    console.log("Sala actualizada:", resultado);
}
eliminarSala();
async function eliminarSala(id) {
    const resultado = await deleteAdmin("Salas", id);
    console.log("Sala eliminada:", resultado);
}
