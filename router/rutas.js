const express = require('express');
const router = express.Router();
const itemController = require('../controllers/peticiones');

// Ruta GET para obtener todos los elementos
router.get('/', itemController.obtenerElementos);

// Ruta POST para crear un nuevo elemento
router.post('/users', itemController.loginUser);
router.post('/combustible', itemController.InsertCombustible);

// Exportar el enrutador
module.exports = router;
