// SERVICIO DE ADMINISTRACIÓN GENERAL (CRUD)

const BASE_URL = "http://localhost:3002";

// GET - Obtener todos los registros de un recurso
async function getAdmin(resource) {
    try {
        const respuestaServidor = await fetch(`${BASE_URL}/${resource}`);
        const datos = await respuestaServidor.json();
        return datos;
    } catch (error) {
        console.error(`Error al obtener ${resource}:`, error);
        return null;
    }
}

// POST - Crear un nuevo registro
async function postAdmin(resource, data) {
    try {
        const respuesta = await fetch(`${BASE_URL}/${resource}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        const nuevoRegistro = await respuesta.json();
        return nuevoRegistro;
    } catch (error) {
        console.error(`Error al crear en ${resource}:`, error);
        return null;
    }
}

// PATCH - Actualizar parcialmente un registro por ID
async function patchAdmin(resource, id, data) {
    try {
        const respuesta = await fetch(`${BASE_URL}/${resource}/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        const registroActualizado = await respuesta.json();
        return registroActualizado;
    } catch (error) {
        console.error(`Error al actualizar id ${id} en ${resource}:`, error);
        return null;
    }
}

// DELETE - Eliminar un registro por ID
async function deleteAdmin(resource, id) {
    try {
        const respuesta = await fetch(`${BASE_URL}/${resource}/${id}`, {
            method: "DELETE",
        });
        const confirmacion = await respuesta.json();
        return confirmacion;
    } catch (error) {
        console.error(`Error al eliminar id ${id} en ${resource}:`, error);
        return null;
    }
}

export { getAdmin, postAdmin, patchAdmin, deleteAdmin };