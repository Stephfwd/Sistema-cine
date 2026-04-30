const {tiposala} = require("../models/index")

exports.crearTipoSala = async (req, res) => {
    try {
        const newTipoSala = await tiposala.create(req.body)
        res.json(newTipoSala)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error del servidor" })
    }
};

exports.buscarTipoSala = async (req, res) => {
    try {
        const infoCines = await tiposala.findAll()
        res.json(infoCines)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error del servidor" })
    }
}

exports.buscarTipoSalaId = async (req, res) => {
    try {
        const { id } = req.params
        const infoCineId = await tiposala.findByPk(id)

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

exports.eliminarTipoSala = async (req, res) => {
    try {
        await tiposala.destroy({
            where: { id: req.params.id }
        });

        res.json({ message: "Usuario eliminado" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.actualizarTipoSala = async (req, res) => {
    try {
        await tiposala.update(req.body, {
            where: { id: req.params.id }
        });

        res.json({ message: "Tipo de sala actualizado" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

