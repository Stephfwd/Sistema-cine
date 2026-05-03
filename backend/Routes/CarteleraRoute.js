const express = require('express');
const router = express.Router();
const carteleraController = require('../controllers/CarteleraController');

router.post('/', carteleraController.crearCartelera);
router.get('/', carteleraController.buscarCarteleras);
router.get('/:id', carteleraController.buscarCarteleraId);
router.put('/:id', carteleraController.actualizarCartelera);
router.delete('/:id', carteleraController.eliminarCartelera);

module.exports = router;
