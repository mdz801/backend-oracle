const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

// GET usuarios con paginación
router.get('/', usuariosController.getUsuarios);
// PUT /usuarios/:id
router.put('/:id', usuariosController.updateUsuarioController);
router.get('/:id', usuariosController.getUsuarioById);
// POST crear usuario
router.post('/', usuariosController.createUsuarioController);
// DELETE /usuarios/:id
router.delete('/:id', usuariosController.deleteUsuarioController);

module.exports = router;
