require('dotenv').config({ path: './src/config/env' });
const express = require('express');
const app = express();
const cors = require('cors');

const routes = require('./routes/index');

app.use(cors());
app.use(express.json());

app.use(routes);

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

