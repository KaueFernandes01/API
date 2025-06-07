const express = require('express');
const router = express.Router();
const MotorController = require('../controllers/MotorController');
const autenticar = require('../src/middlewares/autenticarUsuario');

router.post('/', autenticar, MotorController.registrarMotor);

router.get('/logs/:id', autenticar, MotorController.listarLogsMotor);

module.exports = router;
