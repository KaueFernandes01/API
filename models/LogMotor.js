const db = require('../config/db');

const Motor = {
  async registrarAcao(usuario_id, velocidade, status) {
    await db.query('CALL RegistrarLogMotor(?, ?, ?)', [usuario_id, velocidade, status]);
  }
};

module.exports = Motor;
