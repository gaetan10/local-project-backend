const express = require('express'); 

const router = express.Router();

const farmersController = require('../controllers/controllerFarmers');

//POST /api/products/:farmerId/new
router.post('/:farmerId/new', farmersController.addProduct);

module.exports = router;