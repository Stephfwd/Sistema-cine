const { Sala, Cine, TipoSala } = require("../models/");

exports.crearSala = async (req, res) => {
    try {
        const nuevo = await Sala.create(req.body);
        res.json(nuevo);
    } catch (error) {
        res.status(500).json({ message: "Error del servidor" });
    }
};

exports.buscarSalas = async (req, res) => {
    try {
        const data = await Sala.findAll({
            include: [Cine, TipoSala]
        });
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: "Error del servidor" });
    }
};

exports.buscarSalaId = async (req, res) => {
    try {
        const data = await Sala.findByPk(req.params.id, {
            include: [Cine, TipoSala]
        });

        if (!data) {
            res.status(404).json({ message: "No existe" });
        } else {
            res.json(data);
        }
    } catch (error) {
        res.status(500).json({ message: "Error del servidor" });
    }
};

exports.actualizarSala = async (req, res) => {
    try {
        await Sala.update(req.body, {
            where: { id_sala: req.params.id }
        });
        res.json({ message: "Actualizado" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.eliminarSala = async (req, res) => {
    try {
        await Sala.destroy({
            where: { id_sala: req.params.id }
        });
        res.json({ message: "Eliminado" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};