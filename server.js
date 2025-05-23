const express = require('express');
const app = express();
const usuarioRoutes = require('./routes/usuarios');

app.use(express.json()); // Para ler JSON do body

// Rotas
app.use('/usuarios', usuarioRoutes);

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
