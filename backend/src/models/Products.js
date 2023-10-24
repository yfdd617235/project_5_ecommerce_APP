const mongoose = require('mongoose')

const productsSchema = new mongoose.Schema({
    img: String,
    name: String,
    description: String,
    price: Number,
    stock: Number
});

const Products = mongoose.model('Products', productsSchema)

module.exports = Products;