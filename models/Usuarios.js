const db = require('../src/config/db');

const Usuario = {

  async criar(nome, email, login, senha) {
    const [row] = await db.query('call inserir_dados_usuario(?, ?, ?, ?)', [nome, email, login, senha]);
    return row;
  },

  async buscarTodos() {
    const [rows] = await db.query('SELECT * FROM usuarios');
    return rows;
  },
  async buscarPorId(id){
    const [rows] = await db.query('SELECT id, nome, login, email FROM usuarios WHERE id = ?', [id]);
    return rows;
  },

  async atualizar(id, nome, email, login, senha) {
    const [row] = await db.query(
      'call AtualizarDadosUsuario (?, ?, ?, ?, ?)', [
        id,
        nome,
        email,
        login,
        senha
      ],
    );
    return row.affectedRows > 0;
  },

  async deletar(id) {
    const [row] = await db.query('call DeletarUsuario(?)', [id]);
    return row;
  }
};

module.exports = Usuario;
