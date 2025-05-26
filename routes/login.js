const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const db = require('../config/db'); 
const chaveSecreta = '3985143D';


router.post('/', async (req, res) => {
  const { login, senha } = req.body;

  try {
    
    const [resultado] = await db.query('SELECT * FROM usuarios WHERE login = ? AND senha = ?', [login, senha]);

    if (resultado.length === 0) {
      return res.status(401).json({ erro: 'Login ou senha inválidos' });
    }

    const usuario = resultado[0];

    
    const token = jwt.sign({ id: usuario.id, login: usuario.login }, chaveSecreta, { expiresIn: '1h' });

    res.json({ token });
  } catch (erro) {
    console.error('Erro ao fazer login:', erro);
    res.status(500).json({ erro: 'Erro interno no servidor' });
  }
});

module.exports = router;
