const motorService = require('../service/motorService');

const registrarMotor = async (req, res) => {
  try {
    const { velocidade, status } = req.body;
    const usuario_id = req.usuario?.id;

    if (!usuario_id || !velocidade || !status) {
      return res.status(400).json({ erro: 'Dados inválidos ou usuário não autenticado' });
    }

    await motorService.registrarAcaoMotor(usuario_id, velocidade, status);

    res.status(201).json({ mensagem: 'Ação no motor registrada com sucesso!' });
  } catch (error) {
    console.error('Erro ao registrar ação no motor:', error);
    res.status(500).json({ erro: error.message || 'Erro ao registrar ação no motor' });
  }
};

const listarLogsMotor = async (req, res) => {
  try {
    const usuario_id = req.usuario?.id;

    if (!usuario_id) {
      return res.status(401).json({ erro: 'Usuário não autenticado' });
    }

    const dados = await motorService.listarLogsMotor(usuario_id);

    if (!dados || dados.length === 0) {
      return res.status(200).json([]);
    }

    res.json(dados);
  } catch (error) {
    console.error('Erro ao buscar logs do motor:', error);
    res.status(500).json({ erro: 'Erro ao buscar logs do motor' });
  }
};

module.exports = {
  registrarMotor,
  listarLogsMotor
};