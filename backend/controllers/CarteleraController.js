const { Cartelera, Cine } = require("../models/");

exports.crearCartelera = async (req, res) => {
    try {
        const nuevo = await Cartelera.create(req.body);
        res.json(nuevo);
    } catch (error) {
        res.status(500).json({ message: "Error del servidor" });
    }
};

exports.buscarCarteleras = async (req, res) => {
    try {
        const data = await Cartelera.findAll({
            include: [Cine]
        });
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: "Error del servidor" });
    }
};

exports.buscarCarteleraId = async (req, res) => {
    try {
        const data = await Cartelera.findByPk(req.params.id, {
            include: [Cine]
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

exports.actualizarCartelera = async (req, res) => {
    try {
        await Cartelera.update(req.body, {
            where: { id_cartelera: req.params.id }
        });
        res.json({ message: "Actualizado" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.eliminarCartelera = async (req, res) => {
    try {
        await Cartelera.destroy({
            where: { id_cartelera: req.params.id }
        });
        res.json({ message: "Eliminado" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};