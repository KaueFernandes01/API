const Usuario = require('../models/Usuarios');
const Log = require('../models/LogUsuarios');

async function criarUsuarioService(nome, email, login, senha) {
  const resultado = await Usuario.criar(nome, email, login, senha);
  const novoUsuarioId = resultado[0]?.insertId || resultado.insertId;

  await Log.registrarOuIgnorar(novoUsuarioId, 'Criação de usuário', `Usuário ${nome} criado.`);

  return { id: novoUsuarioId, nome, email, login };
}

async function buscarUsuariosService(usuarioId = 3) {
  const usuarios = await Usuario.buscarTodos();

  await Log.registrarOuIgnorar(usuarioId, 'Visualização de usuários', 'Visualizou a lista de todos os usuários');

  return usuarios;
}

async function atualizarUsuarioService(id, nome, email, login, senha) {
  const atualizado = await Usuario.atualizar(id, nome, email, login, senha);

  if (!atualizado) {
    return false;
  }

  await Log.registrarOuIgnorar(id, 'Atualização de usuário', `Usuário ${id} atualizado.`);

  return true;
}

async function deletarUsuarioService(id) {
  const deletado = await Usuario.deletar(id);

  if (!deletado) {
    return false;
  }

  await Log.registrarOuIgnorar(id, 'Exclusão de usuário', `Usuário ${id} deletado.`);

  return true;
}

module.exports = {
  criarUsuarioService,
  buscarUsuariosService,
  atualizarUsuarioService,
  deletarUsuarioService
};
