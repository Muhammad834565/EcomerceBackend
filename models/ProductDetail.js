const mongoose = require('mongoose');

const productDetailSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  subCategory: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, default: 0 },
  material: { type: String },
  design: { type: String },
  customization: { type: String },
  protectionPolicy: { type: String },
  warranty: { type: String },
  description: { type: String },
  model: { type: String },
  style: { type: String },
  certificate: { type: String },
  size: { type: String },
  memory: { type: String },
  discountPercent: { type: Number },
  subImagesUrl: [{ type: String }],
  image: { type: String }, // main image
}, { timestamps: true });

module.exports = mongoose.model('ProductDetail', productDetailSchema);
