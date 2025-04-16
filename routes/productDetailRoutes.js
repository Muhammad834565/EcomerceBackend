const express = require('express');
const router = express.Router();
const ProductDetail = require('../models/ProductDetail');


// Create
router.post('/', async (req, res) => {
  try {
    const newItem = new ProductDetail(req.body);
    const saved = await newItem.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// // Read all
// router.get('/', async (req, res) => {
//   try {
//     const items = await ProductDetail.find();
//     res.json(items);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// Read by ID
router.get('/:id', async (req, res) => {
  try {
    const item = await ProductDetail.findById(req.params.id);
    item ? res.json(item) : res.status(404).json({ message: 'Not found' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update
router.put('/:id', async (req, res) => {
  try {
    const updated = await ProductDetail.findByIdAndUpdate(req.params.id, req.body, { new: true });
    updated ? res.json(updated) : res.status(404).json({ message: 'Not found' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await ProductDetail.findByIdAndDelete(req.params.id);
    deleted ? res.json({ message: 'Deleted successfully' }) : res.status(404).json({ message: 'Not found' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
