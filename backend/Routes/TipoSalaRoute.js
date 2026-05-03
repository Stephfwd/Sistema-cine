const express = require('express');
const router = express.Router();
const tipoSalaController = require('../controllers/TipoSalaController');

router.post('/', tipoSalaController.crearTipoSala);
router.get('/', tipoSalaController.buscarTipoSala);
router.get('/:id', tipoSalaController.buscarTipoSalaId);
router.put('/:id', tipoSalaController.actualizarTipoSala);
router.delete('/:id', tipoSalaController.eliminarTipoSala);

module.exports = router;
