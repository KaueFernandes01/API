const LogMotor = require('../models/LogMotor');

const ligarMotor = async (req, res) => {
  try {
    const usuarioId = req.usuario?.id || 3; // ou req.body.usuarioId

    await LogMotor.registrar(usuarioId, 'Ligou o motor', 'Usuário ligou o motor.');

    res.json({ mensagem: 'Motor ligado com sucesso!' });
  } catch (error) {
    console.error('Erro ao ligar motor:', error);
    res.status(500).json({ erro: 'Erro ao ligar motor.' });
  }
};

const ajustarVelocidade = async (req, res) => {
  try {
    const { velocidade } = req.body;
    const usuarioId = req.usuario?.id || 3;

    await LogMotor.registrar(usuarioId, 'Ajustou velocidade', `Velocidade definida para ${velocidade}`);

    res.json({ mensagem: 'Velocidade ajustada com sucesso!' });
  } catch (error) {
    console.error('Erro ao ajustar velocidade:', error);
    res.status(500).json({ erro: 'Erro ao ajustar velocidade.' });
  }
};

module.exports = {
  ligarMotor,
  ajustarVelocidade
};
