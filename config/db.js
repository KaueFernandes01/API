// /config/db.js
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'shinkansen.proxy.rlwy.net',
  port: 41033,
  user: 'root',
  password: 'TDWgJZgiwjWPJmEvlmWrxRkCLAeqvZbj',
  database: 'railway',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  timezone: '-03:00'
});

module.exports = pool;
