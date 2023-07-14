const connection = require('../database/connection');

const obtenerElementos = (req, res) => {
  // Lógica para obtener los elementos desde la base de datos
  res.send('Obtener todos los elementos del servicio');
};

const loginUser = (req, res) => {
  // Lógica para crear un nuevo elemento en la base de datos

  // Obtener los datos enviados en la solicitud
  const { name, email, password } = req.body;

  // Crear una nueva entrada en la base de datos
  const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
  connection.query(query, [name, email, password], (error, results) => {
    if (error) {
      console.error('Error al crear un nuevo usuario:', error);
      res.status(500).json({ error: 'Error al crear un nuevo usuario' });
    } else {
      res.json({ message: 'Nuevo usuario creado con éxito' });
    }
  });
};

const InsertCombustible = (req, res) => {
  // Obtener los datos enviados en la solicitud
  const { nro_factura, foto_factura, monto_total, kilometraje, foto_km, fecha, usuario } = req.body;

  // Crear una nueva entrada en la base de datos
  const query = 'INSERT INTO combustible (nro_factura, foto_factura, monto_total, kilometraje, foto_km, fecha, usuario) VALUES (?, ?, ?, ?, ?, ?, ?)';
  connection.query(query, [nro_factura, foto_factura, monto_total, kilometraje, foto_km, fecha, usuario], (error, results) => {
    if (error) {
      console.error('Error al insertar el registro de combustible:', error);
      res.status(500).json({ error: 'Error al insertar el registro de combustible' });
    } else {
      res.json({ message: 'Registro de combustible insertado exitosamente' });
    }
  });
};


module.exports = {
  obtenerElementos,
  loginUser,
  InsertCombustible
};
