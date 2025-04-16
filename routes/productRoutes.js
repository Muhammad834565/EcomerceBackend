const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Create (POST)
router.post('/', async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const saved = await newProduct.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Read all (GET)
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// // Read by ID (GET)
// router.get('/:id', async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     product ? res.json(product) : res.status(404).json({ message: 'Not found' });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// Update (PUT)
router.put('/:id', async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    updated ? res.json(updated) : res.status(404).json({ message: 'Not found' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete (DELETE)
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    deleted ? res.json({ message: 'Deleted successfully' }) : res.status(404).json({ message: 'Not found' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
