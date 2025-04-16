const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  category: { type: String, required: true },
  subCategory: { type: String, required: true },
  price: { type: Number, required: true },
  title: { type: String, required: true },
  image: { type: String, required: true },
  discountPercent: { type: Number },
  discountEndDate: { type: Date },
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
