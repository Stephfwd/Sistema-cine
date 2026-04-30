const btnInicio = document.getElementById("btn-inicio");

btnInicio.addEventListener("click", () => {
    window.location.href = "/pages/index.html";
});

import { getAdmin, postAdmin, patchAdmin, deleteAdmin } from "../servicio_adminjs/admin.js";

localStorage.setItem("Boletos", JSON.stringify(boletos));

mostrarBoletos();
async function mostrarBoletos() {
    const boletos = await getAdmin("Boletos");
    console.log("Listado de boletos:", boletos);
}
agregarBoleto();
async function agregarBoleto(nuevoBoleto) {
    const resultado = await postAdmin("Boletos", nuevoBoleto);
    console.log("Boleto registrado:", resultado);
}
actualizarBoleto();
async function actualizarBoleto(id, datosActualizados) {
    const resultado = await patchAdmin("Boletos", id, datosActualizados);
    console.log("Boleto actualizado:", resultado);
}
eliminarBoleto();
async function eliminarBoleto(id) {
    const resultado = await deleteAdmin("Boletos", id);
    console.log("Boleto eliminado:", resultado);
}
