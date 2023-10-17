const {Router} = require('express')
const {searchProduct, getProductsList, newProduct, deleteProduct, modifyProduct} = require('../controllers/productsController')

const product = (server) =>{
    const router = Router()
    server.use('/products', router)
    router.get('/searchProduct', searchProduct)
    router.get('/getProductsList', getProductsList)
    router.post('/createProduct', newProduct)
    router.put('/modifyProduct/:id', modifyProduct)
    router.delete('/deleteProduct/:id', deleteProduct)
}

module.exports = product;