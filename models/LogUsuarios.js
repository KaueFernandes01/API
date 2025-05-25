const db = require('../config/db');

const LogUsuarios = {
  async registrar(usuario_id, acao, detalhes) {
    await db.query('CALL RegistrarLog(?, ?, ?)', [usuario_id, acao, detalhes]);
  },

  async registrarOuIgnorar(usuario_id, acao, detalhes) {
    if (!usuario_id || usuario_id === 0) {
      console.warn(`Log ignorado: usuário_id inválido [${usuario_id}]`);
      return;
    }

    try {
      await db.query('CALL RegistrarLog(?, ?, ?)', [usuario_id, acao, detalhes]);
    } catch (err) {
      console.error('Erro ao registrar log (ignorado):', err);
    }
  }
};

module.exports = LogUsuarios;
