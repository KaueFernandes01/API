const jwt = require('jsonwebtoken');
const chaveSecreta = 'sua_chave_secreta';

function autenticarToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

  if (!token) return res.status(401).json({ erro: 'Token não fornecido' });

  jwt.verify(token, chaveSecreta, (err, usuario) => {
    if (err) return res.status(403).json({ erro: 'Token inválido' });

    req.usuario = usuario; // Guarda dados do usuário no request
    next();
  });
}

module.exports = autenticarToken;

