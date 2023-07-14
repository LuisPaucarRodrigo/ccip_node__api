const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const itemsRouter = require('./router/rutas');
const dbConnection = require('./database/connection');

const app = express();
const port = 3000;

// Configuración de middleware
app.use(cors());
app.use(bodyParser.json());

// Registrar las rutas
app.use('/items', itemsRouter);

// Iniciar el servidor
app.listen(port, () => {
  console.log('Servidor backend en funcionamiento en el puerto', port);
});
