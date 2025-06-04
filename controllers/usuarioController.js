const usuarioService = require('../service/usuarioService');
const usuarioSchema = require('../validators/userValidacao');

const criarUsuario = async (req, res) => {
  try {
    await usuarioSchema.validateAsync(req.body,{abortEarly: false});
    const { nome, email, login, senha } = req.body;
    await usuarioService.criarUsuarioService(nome, email, login, senha);

    res.status(201).json({ mensagem: 'Usuário criado com sucesso!' });

  } catch (error) {
    if (error.isJoi){
      const mensagens = error.details.map(d => d.message);
      return res.status(400).json({ erro:mensagens});
    }
    console.error('Erro ao criar usuário: ', error);
    res.status(500).json({ erro: 'Erro interno ao criar usuário' });
  }
};
const buscarPorId = async (req, res) => {
  const { id } = req.params;

  try {
    const usuario = await usuarioService.buscarUsuarioPorIdService(id, req.usuario?.id || 3); 
    res.json(usuario);
  } catch (error) {
    res.status(404).json({ erro: error.message });
  }
};

const buscarUsuarios = async (req, res) => {
  try {
    const usuarioId = req.usuario?.id ?? 3;
    const usuarios = await usuarioService.buscarUsuariosService(usuarioId);

    res.json(usuarios);
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    res.status(500).json({ erro: 'Erro interno ao buscar usuários' });
  }
};

const atualizarUsuario = async (req, res) => {
  try {
    await usuarioSchema.validateAsync(req.body,{abortEarly: false});
    const { id } = req.params;
    const { nome, email, login, senha } = req.body;

    const atualizado = await usuarioService.atualizarUsuarioService(id, nome, email, login, senha);

    if (!atualizado) {
      return res.status(404).json({ mensagem: 'Usuário não encontrado ou não atualizado' });
    }

    res.json({ mensagem: 'Usuário atualizado com sucesso!' });
  } catch (error) {
    if (error.isJoi){
      const mensagens = error.details.map(d => d.message);
      return res.status(400).json({ erro:mensagens});
    }
    console.error('Erro ao atualizar usuário:', error);
    res.status(500).json({ erro: 'Erro interno ao atualizar usuário' });
  }
};

const deletarUsuario = async (req, res) => {
  try {
    const { id } = req.params;

    const deletado = await usuarioService.deletarUsuarioService(id);

    if (!deletado) {
      return res.status(404).json({ mensagem: 'Usuário não encontrado ou não deletado' });
    }

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
  deletarUsuario,
  buscarPorId
};
