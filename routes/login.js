const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const chaveSecreta = 'sua_chave_secreta';

// Rota POST /login que recebe login e senha, e retorna um token JWT
router.post('/', (req, res) => {
  const { login, senha } = req.body;

  // Aqui você faria a validação no banco, mas pra teste vamos simular:
  if (login === 'admin' && senha === '1234') {
    // Criar payload com dados do usuário
    const usuario = { id: 1, login: 'admin' };

    // Gerar token (expira em 1h)
    const token = jwt.sign(usuario, chaveSecreta, { expiresIn: '1h' });

    return res.json({ token });
  }

  res.status(401).json({ erro: 'Login ou senha inválidos' });
});

module.exports = router;
