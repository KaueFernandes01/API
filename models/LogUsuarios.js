const db = require('../src/config/db');

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
  },
  async buscarTodos(){
    const[linhas] = await db.query('SELECT * FROM log ORDER BY data_hora DESC');
    return linhas;
  },
  async buscarPorUsuario(usuario_id){
    const [linhas] = await db.query('SELECT * FROM log WHERE usuario_id = ? ORDER BY data_hora DESC', [usuario_id]);
    return linhas;
  }
};

module.exports = LogUsuarios;
