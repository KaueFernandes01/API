const db = require('../config/db');

async function testConnection() {
  try {
    const [rows] = await db.query('SELECT 1');
    console.log('✅ Conexão com o banco de dados bem-sucedida!');
  } catch (error) {
    console.error('❌ Erro ao conectar ao banco:', error.message);
  }
}

testConnection();
