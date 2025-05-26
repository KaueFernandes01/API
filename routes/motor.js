const express = require('express');
const router = express.Router();
const MotorController = require('../controllers/MotorController');
const autenticar = require('../middlewares/autenticarUsuario');

router.post('/', autenticar, MotorController.registrarMotor);

router.get('/', autenticar, MotorController.listarLogsMotor);

module.exports = router;
