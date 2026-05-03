const express = require('express');
const router = express.Router();
const funcionController = require('../controllers/FuncionController');

router.post('/', funcionController.crearFuncion);
router.get('/', funcionController.buscarFunciones);
router.get('/:id', funcionController.buscarFuncionId);
router.put('/:id', funcionController.actualizarFuncion);
router.delete('/:id', funcionController.eliminarFuncion);

module.exports = router;
