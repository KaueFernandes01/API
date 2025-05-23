const Usuario = require('../models/Usuarios');

const criarUsuario = async (req, res) => {
    try {
        const {nome, email, login, senha} = req.body;
        const resultado = await Usuario.criar(nome, email, login, senha);
        res.status(201).json({mensagem: 'Usuário criado com sucesso!',resultado});
    } catch (error){
        console.error('Erro ao criar usuário: ', error);
        res.status(500).json({erro: 'Erro interno ao criar usuário'});
    }
};

const buscarUsuarioPorId = async (req, res) => {
    try {
        const {id} = req.params;
        const usuario = await Usuario.buscarPorId(id);

        if (!usuario){
            return res.status(404).json({mensagem: 'Usuário não encontrado'});
        }
        res.json(usuario);
    }catch (error) {
        console.error('Erro ao buscar usuário: ', error);
        res.status(500).json({erro: 'Erro interno ao buscar usuário'});
    }
};

const atualizarUsuario = async (req, res) => {
    try{
        const {id} = req.params;
        const {nome, email, login, senha} = req.body;

        const atualizado = await Usuario.atualizar(id, nome, email, login, senha);

        if (!atualizado) {
        return res.status(404).json({mensagem: 'Usuário não encontrado ou não atualizado'});
        }
        res.json({ mensagem: 'Usuário atualizado com sucesso!' });
    }catch (error) {
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

    res.json({ mensagem: 'Usuário deletado com sucesso!' });
  } catch (error) {
    console.error('Erro ao deletar usuário:', error);
    res.status(500).json({ erro: 'Erro interno ao deletar usuário' });
  }
};

module.exports = {
    criarUsuario,
    buscarUsuarioPorId,
    atualizarUsuario,
    deletarUsuario,
};