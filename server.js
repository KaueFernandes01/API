const express = require('express');
const app = express();

const usuarioRoutes = require('./routes/usuarios');
const loginRoute = require('./routes/login');
const motorRoutes = require('./routes/motor');
const autenticarToken = require('./middlewares/autenticarUsuario');

app.use(express.json());

app.use('/login', loginRoute);


app.use('/usuarios', autenticarToken, usuarioRoutes);
app.use('/motor', autenticarToken, motorRoutes)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

