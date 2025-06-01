const logService = require('../service/logService');

const listarLogs = async (req, res) => {
    try {
        const logs = await logService.listarTodosLogsService();
        res.json(logs);
    }catch (error){
        console.error('Erro ao buscar logs: ', error);
        res.status(500).json({erro: 'Erro ao buscar logs'});
    }
};

const listarLogsPorUsuario = async (req, res) => {
    try {
        const{id} = req.params;
        const logs = await logService.listarLogsPorUsuarioService(id);
        res.json(logs);
    }catch (error) {
        console.error('Erro ao buscar logs por usuário: ', error);
        res.status(500).json({erro: 'Erro ao buscar logs por usuário'});
    }
};

module.exports = {
    listarLogs,
    listarLogsPorUsuario
};