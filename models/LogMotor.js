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
    'SELECT * FROM motor WHERE usuario_id = ? ORDER BY data_hora DESC',
    [usuario_id]
  );
  return linhas;
  }
};

module.exports = Motor;