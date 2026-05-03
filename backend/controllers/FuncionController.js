const { Funcion, Pelicula, Sala, Cartelera } = require("../models/");

exports.crearFuncion = async (req, res) => {
    try {
        const nuevo = await Funcion.create(req.body);
        res.json(nuevo);
    } catch (error) {
        res.status(500).json({ message: "Error del servidor" });
    }
};

exports.buscarFunciones = async (req, res) => {
    try {
        const data = await Funcion.findAll({
            include: [Pelicula, Sala, Cartelera]
        });
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: "Error del servidor" });
    }
};

exports.buscarFuncionId = async (req, res) => {
    try {
        const data = await Funcion.findByPk(req.params.id, {
            include: [Pelicula, Sala, Cartelera]
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

exports.actualizarFuncion = async (req, res) => {
    try {
        await Funcion.update(req.body, {
            where: { id_funcion: req.params.id }
        });
        res.json({ message: "Actualizado" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.eliminarFuncion = async (req, res) => {
    try {
        await Funcion.destroy({
            where: { id_funcion: req.params.id }
        });
        res.json({ message: "Eliminado" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};