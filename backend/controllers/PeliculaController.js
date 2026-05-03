const { Pelicula } = require("../models/");

exports.crearPelicula = async (req, res) => {
    try {
        const nueva = await Pelicula.create(req.body);
        res.json(nueva);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error del servidor" });
    }
};

exports.buscarPeliculas = async (req, res) => {
    try {
        const data = await Pelicula.findAll();
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error del servidor" });
    }
};

exports.buscarPeliculaId = async (req, res) => {
    try {
        const data = await Pelicula.findByPk(req.params.id);

        if (!data) {
            res.status(404).json({ message: "No existe" });
        } else {
            res.json(data);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error del servidor" });
    }
};

exports.actualizarPelicula = async (req, res) => {
    try {
        await Pelicula.update(req.body, {
            where: { id_pelicula: req.params.id }
        });
        res.json({ message: "Pelicula actualizada" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.eliminarPelicula = async (req, res) => {
    try {
        await Pelicula.destroy({
            where: { id_pelicula: req.params.id }
        });
        res.json({ message: "Eliminado" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
