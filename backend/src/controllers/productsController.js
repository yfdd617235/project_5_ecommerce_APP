const Products = require('../models/Products')

const newProduct = () =>{

}

const searchProduct = async(request, response) =>{
    const {id} = request.body

    if(!id){
        return response.status(400).json({
            success: false,
            menssage: 'ID not provided'
        })
    }
    const product = await Products.findById({id})
    response.json({
        success: true,
        message: 'Product was found',
        data: product
    })
}

const deleteProduct = () =>{

}

module.exports = searchProduct;