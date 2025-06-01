const motorService = require('../service/motorService');

const registrarMotor = async (req, res) => {
  try {
    const { velocidade, status } = req.body;
    const usuario_id = req.usuario?.id;

    await motorService.registrarAcaoMotor(usuario_id, velocidade, status);

    res.status(201).json({ mensagem: 'Ação no motor registrada com sucesso!' });
  } catch (error) {
    console.error('Erro ao registrar ação no motor:', error);
    res.status(500).json({ erro: error.message || 'Erro ao registrar ação no motor' });
  }
};

const listarLogsMotor = async (req, res) => {
  try {
    const dados = await motorService.listarLogsMotor();
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