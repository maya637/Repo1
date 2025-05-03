const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Test the database connection
async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log('Successfully connected to the MySQL database.');
    connection.release();
  } catch (error) {
    console.error('Error connecting to MySQL database:', error);
    process.exit(1);
  }
}

testConnection();

module.exports = pool;

