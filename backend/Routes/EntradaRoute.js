const express = require('express');
const router = express.Router();
const entradaController = require('../controllers/EntradaController');

router.post('/', entradaController.crearEntrada);
router.get('/', entradaController.buscarEntradas);
router.get('/:id', entradaController.buscarEntradaId);
router.put('/:id', entradaController.actualizarEntrada);
router.delete('/:id', entradaController.eliminarEntrada);

module.exports = router;
