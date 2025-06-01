const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/usuarioController');
const autenticarUsuario = require('../src/middlewares/autenticarUsuario');

router.post('/', UsuarioController.criarUsuario);

router.get('/', autenticarUsuario, UsuarioController.buscarUsuarios);


router.put('/:id', autenticarUsuario, UsuarioController.atualizarUsuario);


router.delete('/:id', autenticarUsuario, UsuarioController.deletarUsuario);

module.exports = router;

