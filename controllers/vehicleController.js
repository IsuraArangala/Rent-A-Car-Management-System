const { Vehicle } = require('../models');

// Create a new vehicle
exports.createVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicle.create(req.body);
    res.status(201).json(vehicle);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Get all vehicles
exports.getAllVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.findAll();
    res.json(vehicles);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Get a specific vehicle by ID
exports.getVehicleById = async (req, res) => {
  try {
    const vehicle = await Vehicle.findByPk(req.params.id);
    if (!vehicle) {
      res.status(404).json({ error: 'Vehicle not found' });
    } else {
      res.json(vehicle);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Update a vehicle by ID
exports.updateVehicleById = async (req, res) => {
  try {
    const vehicle = await Vehicle.findByPk(req.params.id);
    if (!vehicle) {
      res.status(404).json({ error: 'Vehicle not found' });
    } else {
      const updatedVehicle = await vehicle.update(req.body);
      res.json(updatedVehicle);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Delete a vehicle by ID
exports.deleteVehicleById = async (req, res) => {
  try {
    const vehicle = await Vehicle.findByPk(req.params.id);
    if (!vehicle) {
      res.status(404).json({ error: 'Vehicle not found' });
    } else {
      await vehicle.destroy();
      res.json({ message: 'Vehicle deleted successfully' });
    }
} catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};