const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');

// Create a new vehicle
router.post('/', vehicleController.createVehicle);

// Get all vehicles
router.get('/', vehicleController.getAllVehicles);

// Get a specific vehicle by ID
router.get('/:id', vehicleController.getVehicleById);

// Update a vehicle by ID
router.put('/:id', vehicleController.updateVehicleById);

// Delete a vehicle by ID
router.delete('/:id', vehicleController.deleteVehicleById);

module.exports = router;