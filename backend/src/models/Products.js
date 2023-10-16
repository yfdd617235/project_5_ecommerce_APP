const mongoose = require('mongoose')

const productsSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    stock: Number
});

const Products = mongoose.model('Products', productsSchema)

module.exports = Products;