const Usuario = require('../models/Usuarios');
const Log = require('../models/LogUsuarios');

const criarUsuario = async (req, res) => {
  try {
    const { nome, email, login, senha } = req.body;
    const resultado = await Usuario.criar(nome, email, login, senha);

    const novoUsuarioId = resultado[0]?.insertId || resultado.insertId;

    await Log.registrarOuIgnorar(novoUsuarioId, 'Criação de usuário', `Usuário ${nome} criado.`);

    res.status(201).json({ mensagem: 'Usuário criado com sucesso!' });
  } catch (error) {
    console.error('Erro ao criar usuário: ', error);
    res.status(500).json({ erro: 'Erro interno ao criar usuário' });
  }
};

const buscarUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.buscarTodos();

    const usuarioId = req.usuario?.id ?? 3;
    await Log.registrarOuIgnorar(usuarioId, 'Visualização de usuários', 'Visualizou a lista de todos os usuários');

    res.json(usuarios);
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    res.status(500).json({ erro: 'Erro interno ao buscar usuários' });
  }
};

const atualizarUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, email, login, senha } = req.body;

    const atualizado = await Usuario.atualizar(id, nome, email, login, senha);

    if (!atualizado) {
      return res.status(404).json({ mensagem: 'Usuário não encontrado ou não atualizado' });
    }

    await Log.registrarOuIgnorar(id, 'Atualização de usuário', `Usuário ${id} atualizado.`);

    res.json({ mensagem: 'Usuário atualizado com sucesso!' });
  } catch (error) {
    console.error('Erro ao atualizar usuário:', error);
    res.status(500).json({ erro: 'Erro interno ao atualizar usuário' });
  }
};

const deletarUsuario = async (req, res) => {
  try {
    const { id } = req.params;

    const deletado = await Usuario.deletar(id);

    if (!deletado) {
      return res.status(404).json({ mensagem: 'Usuário não encontrado ou não deletado' });
    }

    await Log.registrarOuIgnorar(id, 'Exclusão de usuário', `Usuário ${id} deletado.`);

    res.json({ mensagem: 'Usuário deletado com sucesso!' });
  } catch (error) {
    console.error('Erro ao deletar usuário:', error);
    res.status(500).json({ erro: 'Erro interno ao deletar usuário' });
  }
};

module.exports = {
  criarUsuario,
  buscarUsuarios,
  atualizarUsuario,
  deletarUsuario
};
