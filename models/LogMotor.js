const db = require('../src/config/db');

const Motor = {
  async registrarAcao(usuario_id, velocidade, status) {
    const [resultado] = await db.query(
      'CALL RegistrarLogMotor(?, ?, ?)',
      [usuario_id, velocidade, status]
    );
    return resultado;
  },

  async buscarLogsPorUsuario(usuario_id) {
    const [linhas] = await db.query(
      'SELECT id, usuario_id, velocidade, status, DATE_FORMAT(data_hora_recife, "%d/%m/%Y %H:%i") AS data_hora_formatada FROM motor WHERE usuario_id = ? ORDER BY data_hora DESC',
      [usuario_id]
    );

    return linhas;
  }
};

module.exports = Motor;