const Motor = require('../models/LogMotor');
const Log = require('../models/LogUsuarios');

async function registrarAcaoMotor(usuario_id, velocidade, status) {
  if (!usuario_id) {
    throw new Error('Usuário não autenticado');
  }

  await Motor.registrarAcao(usuario_id, velocidade, status);

  await Log.registrarOuIgnorar(
    usuario_id,
    'Controle do motor',
    `Usuário alterou o motor para status: ${status} com velocidade: ${velocidade}`
  );
}

async function listarLogsMotor(usuario_id) {
  if (!usuario_id) {
    throw new Error('Usuário não autenticado');
  }

  const dados = await Motor.buscarLogsPorUsuario(usuario_id); 
  return dados;
}

module.exports = {
  registrarAcaoMotor,
  listarLogsMotor
};