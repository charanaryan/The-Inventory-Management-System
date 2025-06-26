const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
     name: { type: String, required: true },
  description: String,
  supplier: String,
  sales: { type: Number, default: 0 },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
})


const productModel = new mongoose.model('Products', productSchema)

module.exports = productModel