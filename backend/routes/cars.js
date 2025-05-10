// backend/routes/cars.js
const express = require('express');
const router  = express.Router();
const Car     = require('../models/Car');

/**
 * GET /api/cars
 * Return all car listings (or [] if none)
 */
router.get('/', async (req, res) => {
  try {
    const cars = await Car.find().sort({ createdAt: -1 });
    return res.status(200).json(cars);
  } catch (err) {
    console.error('Error fetching car listings:', err);
    return res.status(500).json({ message: 'Failed to fetch car listings.', error: err.message });
  }
});

/**
 * POST /api/cars
 * Create a new car listing
 */
router.post('/', async (req, res) => {
  try {
    const car = await Car.create(req.body);
    return res.status(201).json(car);
  } catch (err) {
    console.error('Error creating car listing:', err);
    return res.status(500).json({ message: 'Failed to create car listing.', error: err.message });
  }
});

/**
 * GET /api/cars/:stockNumber
 * Return a single car by stock number
 */
router.get('/:stockNumber', async (req, res) => {
  try {
    const car = await Car.findOne({ stockNumber: req.params.stockNumber });
    if (!car) return res.status(404).json({ message: 'Car not found.' });
    return res.status(200).json(car);
  } catch (err) {
    console.error('Error fetching car:', err);
    return res.status(500).json({ message: 'Failed to fetch car.', error: err.message });
  }
});

/**
 * PUT /api/cars/:stockNumber
 * Update a car listing by stock number
 */
router.put('/:stockNumber', async (req, res) => {
  try {
    const car = await Car.findOneAndUpdate(
      { stockNumber: req.params.stockNumber },
      req.body,
      { new: true }
    );
    if (!car) return res.status(404).json({ message: 'Car not found.' });
    return res.status(200).json(car);
  } catch (err) {
    console.error('Error updating car listing:', err);
    return res.status(500).json({ message: 'Failed to update car listing.', error: err.message });
  }
});

/**
 * DELETE /api/cars/:stockNumber
 * Delete a car listing by stock number
 */
router.delete('/:stockNumber', async (req, res) => {
  try {
    const car = await Car.findOneAndDelete({ stockNumber: req.params.stockNumber });
    if (!car) return res.status(404).json({ message: 'Car not found.' });
    return res.status(200).json({ message: 'Car listing deleted.' });
  } catch (err) {
    console.error('Error deleting car listing:', err);
    return res.status(500).json({ message: 'Failed to delete car listing.', error: err.message });
  }
});

module.exports = router;
