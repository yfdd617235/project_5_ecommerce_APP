const Products = require('../models/Products')

const newProduct = async (request, response) =>{

    try{
        const product = request.body
        const newProduct = await Products.create(product)
    
        return response.json({
        success: true,
        data: newProduct
        })
    }catch(error){
        console.log(error);
        return response.json({
            success : false,
            message : error.message
        })
    }

}

const searchProduct = async(request, response) =>{
    const {id} = request.body

    if(!id){
        return response.status(400).json({
            success: false,
            menssage: 'ID not provided'
        })
    }
    const product = await Products.findById(id)
    response.json({
        success: true,
        message: 'Product was found',
        data: product
    })
}

const deleteProduct = () =>{

}

module.exports = {
    searchProduct, 
    newProduct
};