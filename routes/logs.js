const express = require('express');
const router = express.Router();
const LogController = require('../controllers/LogController');
const autenticar = require('../src/middlewares/autenticarUsuario');

router.get('/', autenticar, LogController.listarLogs);
router.get('/usuario/:id', autenticar, LogController.listarLogsPorUsuario);

module.exports = router;