const {cine} = require("../models/index");


exports.crearCine = async (req, res) => {
    try {
        const newCine = await cine.create(req.body)
        res.json(newCine)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error del servidor" })
    }
};

exports.buscarCine = async (req, res) => {
    try {
        const infoCines = await cine.findAll()
        res.json(infoCines)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error del servidor" })
    }
}


exports.buscarCineId = async (req, res) => {
    try {
        const { id } = req.params
        const infoCineId = await cine.findByPk(id)

        if (!infoCineId) {
            res.status(404).json({ message: "La información no existe" })
        } else {
            res.json(infoCineId)
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error del servidor" })
    }
}

exports.eliminarCine = async (req, res) => {
    try {
        await cine.destroy({
            where: { id: req.params.id }
        });

        res.json({ message: "Usuario eliminado" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.actualizarCine = async (req, res) => {
    try {
        await cine.update(req.body, {
            where: { id: req.params.id }
        });

        res.json({ message: "Cine actualizado" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
