const express = require('express');
const router = express.Router();

const usuarioRoutes = require('./usuarios');
const loginRoute = require('./login');
const motorRoutes = require('./motor');
const autenticarToken = require('../src/middlewares/autenticarUsuario');
const logRoutes = require('./logs');

router.use('/login', loginRoute);
router.use('/usuarios', usuarioRoutes);
router.use('/motor', autenticarToken, motorRoutes)
router.use('/logs', autenticarToken, logRoutes);

module.exports = router;