const { Asiento, Sala } = require("../models/");

exports.crearAsiento = async (req, res) => {
    try {
        const nuevo = await Asiento.create(req.body);
        res.json(nuevo);
    } catch (error) {
        res.status(500).json({ message: "Error del servidor" });
    }
};

exports.buscarAsientos = async (req, res) => {
    try {
        const data = await Asiento.findAll({
            include: [Sala]
        });
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: "Error del servidor" });
    }
};

exports.buscarAsientoId = async (req, res) => {
    try {
        const data = await Asiento.findByPk(req.params.id, {
            include: [Sala]
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

exports.actualizarAsiento = async (req, res) => {
    try {
        await Asiento.update(req.body, {
            where: { id_asiento: req.params.id }
        });
        res.json({ message: "Actualizado" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.eliminarAsiento = async (req, res) => {
    try {
        await Asiento.destroy({
            where: { id_asiento: req.params.id }
        });
        res.json({ message: "Eliminado" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};