const express = require('express');
const router = express.Router();
const asientoController = require('../controllers/AsientoController');

router.post('/', asientoController.crearAsiento);
router.get('/', asientoController.buscarAsientos);
router.get('/:id', asientoController.buscarAsientoId);
router.put('/:id', asientoController.actualizarAsiento);
router.delete('/:id', asientoController.eliminarAsiento);

module.exports = router;
