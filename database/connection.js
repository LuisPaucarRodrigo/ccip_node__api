const mysql = require('mysql2');

// Conexión a la base de datos MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'ccip',
});

connection.connect((error) => {
  if (error) {
    console.error('Error al conectar a la base de datos:', error);
  } else {
    console.log('Conexión exitosa a la base de datos');
  }
});

module.exports = connection;
