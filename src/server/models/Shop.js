const mongoose = require('mongoose');

const ShopSchema = new mongoose.Schema(({
  name: String,
  description: String,
  type: String,
  distance: Number,
  image_path: String
}));

module.exports = mongoose.model('Shop', ShopSchema);
