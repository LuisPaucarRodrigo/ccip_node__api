const itemService = require('../services/itemservices');

const obtenerElementos = (req, res) => {
  // Lógica para obtener los elementos desde el servicio
  itemService.obtenerElementos(req, res);
};

const loginUser = (req, res) => {
  // Lógica para obtener los elementos desde el servicio
  itemService.loginUser(req, res);
};

const InsertCombustible = (req, res) => {
  // Lógica para crear un nuevo elemento en el servicio
  itemService.InsertCombustible(req, res);
};

const InsertTraslado = (req, res) => {
  // Lógica para crear un nuevo elemento en el servicio
  itemService.InsertTraslado(req, res);
};

module.exports = {
  obtenerElementos,
  loginUser,
  InsertCombustible,
  InsertTraslado
};
