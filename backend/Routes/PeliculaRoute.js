const express = require('express');
const router = express.Router();
const peliculaController = require('../controllers/PeliculaController');

router.post('/', peliculaController.crearPelicula);
router.get('/', peliculaController.buscarPeliculas);
router.get('/:id', peliculaController.buscarPeliculaId);
router.put('/:id', peliculaController.actualizarPelicula);
router.delete('/:id', peliculaController.eliminarPelicula);

module.exports = router;
