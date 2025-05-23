const db = require('../config/db');

const LogUsuarios = {
  async registrar(usuario_id, acao, detalhes) {
    await db.query('CALL RegistrarLog(?, ?, ?)', [usuario_id, acao, detalhes]);
  }
};

module.exports = LogUsuarios;
