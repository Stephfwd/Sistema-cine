const express = require('express');
const router = express.Router();
const salaController = require('../controllers/SalaController');

router.post('/', salaController.crearSala);
router.get('/', salaController.buscarSalas);
router.get('/:id', salaController.buscarSalaId);
router.put('/:id', salaController.actualizarSala);
router.delete('/:id', salaController.eliminarSala);

module.exports = router;
