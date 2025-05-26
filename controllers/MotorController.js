const Motor = require('../models/LogMotor');
const Log = require('../models/LogUsuarios');

const registrarMotor = async (req, res) => {
  try {
    const { velocidade, status } = req.body;
    const usuario_id = req.usuario?.id;

    if (!usuario_id) {
      return res.status(401).json({ erro: 'Usuário não autenticado' });
    }

    await Motor.registrarAcao(usuario_id, velocidade, status);

    await Log.registrarOuIgnorar(usuario_id, 'Controle do motor', `Usuário alterou o motor para status: ${status} com velocidade: ${velocidade}`);

    res.status(201).json({ mensagem: 'Ação no motor registrada com sucesso!' });
  } catch (error) {
    console.error('Erro ao registrar ação no motor:', error);
    res.status(500).json({ erro: 'Erro ao registrar ação no motor' });
  }
};

const listarLogsMotor = async (req, res) => {
  try {
    const dados = await Motor.buscarTodos();
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