const express = require('express');
const app = express();

const usuarioRoutes = require('./routes/usuarios');
const loginRoute = require('./routes/login');
const autenticarToken = require('./middlewares/autenticarUsuario');

app.use(express.json());

app.use('/login', loginRoute);

// Aplica o middleware a todas as rotas de usuário
app.use('/usuarios', autenticarToken, usuarioRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

