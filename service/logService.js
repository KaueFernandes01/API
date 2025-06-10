const Log = require('../models/LogUsuarios');

async function listarTodosLogsService(){
    return await Log.buscarTodos();
}
async function listarLogsPorUsuarioService(usuarioId){
    return await Log.buscarPorUsuario(usuarioId);
}

module.exports = {
    listarTodosLogsService,
    listarLogsPorUsuarioService
}