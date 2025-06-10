const Log = require('../models/LogUsuarios');

async function listarTodosLogsService() {
  return await Log.buscarTodos();
}

async function listarLogsPorUsuarioService(usuarioId) {
  return await Log.buscarPorUsuario(usuarioId);
}

async function registrarLogService(usuario_id, acao, detalhes) {
  return await Log.registrar(usuario_id, acao, detalhes);
}

module.exports = {
  listarTodosLogsService,
  listarLogsPorUsuarioService,
  registrarLogService,
};
