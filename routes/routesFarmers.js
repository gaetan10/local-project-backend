const express = require('express'); 

const router = express.Router();

const farmersController = require('../controllers/controllerFarmers');

// GET /api/farmers
router.get('/', farmersController.getFarmers);

// GET /api/farmers/farmerId
router.get('/:farmerId', farmersController.getFarmerById);

// POST /api/farmers/new
router.post('/new', farmersController.createFarmer);

// PUT /api/farmers/farmerId
router.put('/:farmerId', farmersController.updateFarmer);

// DELETE /api/farmers/farmerId
router.delete('/:farmerId', farmersController.deleteFarmer);

module.exports = router;