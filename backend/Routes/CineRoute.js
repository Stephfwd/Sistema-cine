const express = require('express');
const router = express.Router();
const cineController = require('../controllers/CineController');

router.post('/', cineController.crearCine);
router.get('/', cineController.buscarCine);
router.get('/:id', cineController.buscarCineId);
router.put('/:id', cineController.actualizarCine);
router.delete('/:id', cineController.eliminarCine);

module.exports = router;