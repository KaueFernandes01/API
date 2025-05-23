const db = require('../config/db');

const Usuario = {

  async criar(nome, email, login, senha) {
    const [result] = await db.query('call inserir_dados_usuario(?, ?, ?, ?)', [nome, email, login, senha]);
    return result;
  },

  async buscarPorId(id) {
    const [rows] = await db.query('call BuscarUsuarioPorId(?)',[id]);
    return rows[0];
  },

  async atualizar(id, nome, email, login, senha) {
    const [result] = await db.query(
      'call AtualizarDadosUsuario (?, ?, ?, ?, ?)', [
        id,
        nome,
        email,
        login,
        senha
      ],
    );
    return result.affectedRows > 0;
  },

  async deletar(id) {
    const [result] = await db.query('call DeletarUsuario(?)', [id]);
    return result;
  }
};

module.exports = Usuario;
