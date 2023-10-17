const {Router} = require('express')
const {searchProduct, newProduct} = require('../controllers/productsController')

const product = (server) =>{
    const router = Router()
    server.use('/products', router)
    router.get('/searchProduct', searchProduct)
    router.post('/createProduct', newProduct)
    router.put('/modifyProduct', () => {})
    router.delete('/deleteProduct', () => {})
}

module.exports = product;