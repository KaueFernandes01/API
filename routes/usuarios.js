const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/usuarioController');

// Rota para criar um novo usuário
router.post('/', UsuarioController.criarUsuario);

// Rota para buscar um usuário por ID
router.get('/:id', UsuarioController.buscarUsuarioPorId);

// Rota para atualizar um usuário por ID
router.put('/:id', UsuarioController.atualizarUsuario);

// Rota para deletar um usuário por ID
router.delete('/:id', UsuarioController.deletarUsuario);

module.exports = router;
