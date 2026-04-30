const btnInicio = document.getElementById("btn-inicio");

btnInicio.addEventListener("click", () => {
    window.location.href = "/pages/index.html";
});

import { getAdmin, postAdmin, patchAdmin, deleteAdmin } from "../servicio_adminjs/admin.js";

localStorage.setItem("Confiteria", JSON.stringify(confiteria));

mostrarConfiteria();
async function mostrarConfiteria() {
    const confiteria = await getAdmin("Confiteria");
    console.log("Productos de confitería:", confiteria);
}
agregarProducto();
async function agregarProducto(nuevoProducto) {
    const resultado = await postAdmin("Confiteria", nuevoProducto);
    console.log("Producto agregado:", resultado);
}
actualizarProducto();
async function actualizarProducto(id, datosActualizados) {
    const resultado = await patchAdmin("Confiteria", id, datosActualizados);
    console.log("Producto actualizado:", resultado);
}
eliminarProducto();
async function eliminarProducto(id) {
    const resultado = await deleteAdmin("Confiteria", id);
    console.log("Producto eliminado:", resultado);
}