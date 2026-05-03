const { Entrada, Funcion, Asiento } = require("../models/");

exports.crearEntrada = async (req, res) => {
    try {
        const nueva = await Entrada.create(req.body);
        res.json(nueva);
    } catch (error) {
        res.status(500).json({ message: "Error del servidor" });
    }
};

exports.buscarEntradas = async (req, res) => {
    try {
        const data = await Entrada.findAll({
            include: [Funcion, Asiento]
        });
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: "Error del servidor" });
    }
};

exports.buscarEntradaId = async (req, res) => {
    try {
        const data = await Entrada.findByPk(req.params.id, {
            include: [Funcion, Asiento]
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

exports.actualizarEntrada = async (req, res) => {
    try {
        await Entrada.update(req.body, {
            where: { id_entrada: req.params.id }
        });
        res.json({ message: "Actualizado" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.eliminarEntrada = async (req, res) => {
    try {
        await Entrada.destroy({
            where: { id_entrada: req.params.id }
        });
        res.json({ message: "Eliminado" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};