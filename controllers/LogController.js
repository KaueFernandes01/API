const logService = require('../service/logService');

const listarLogs = async (req, res) => {
  try {
    const logs = await logService.listarTodosLogsService();
    res.json(logs);
  } catch (error) {
    console.error('Erro ao buscar logs: ', error);
    res.status(500).json({ erro: 'Erro ao buscar logs' });
  }
};

const listarLogsPorUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const logs = await logService.listarLogsPorUsuarioService(id);
    res.json(logs);
  } catch (error) {
    console.error('Erro ao buscar logs por usuário: ', error);
    res.status(500).json({ erro: 'Erro ao buscar logs por usuário' });
  }
};

const registrarLog = async (req, res) => {
  try {
    const { usuario_id, acao, detalhes } = req.body;

    if (!usuario_id || !acao) {
      return res.status(400).json({ erro: 'usuario_id e acao são obrigatórios' });
    }

    await logService.registrarLogService(usuario_id, acao, detalhes || '');
    res.status(201).json({ mensagem: 'Log registrado com sucesso' });
  } catch (error) {
    console.error('Erro ao registrar log: ', error);
    res.status(500).json({ erro: 'Erro ao registrar log' });
  }
};

module.exports = {
  listarLogs,
  listarLogsPorUsuario,
  registrarLog,
};
