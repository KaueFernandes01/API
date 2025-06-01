const db = require('../src/config/db');

const Motor = {
  async registrarAcao(usuario_id, velocidade, status) {
    const [resultado] = await db.query(
      'CALL RegistrarLogMotor(?, ?, ?)',
      [usuario_id, velocidade, status]
    );
    return resultado;
  },

  async buscarTodos() {
    const [linhas] = await db.query('SELECT * FROM motor ORDER BY data_hora DESC');
    return linhas;
  }
};

module.exports = Motor;
