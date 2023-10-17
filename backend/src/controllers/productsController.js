const Products = require('../models/Products')

//CREATE PRODUCT
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

//GET PRODUCT
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

//GET PRODUCTS LIST
const getProductsList = async(request, response) =>{

    const product = await Products.find()
    response.json({
        success: true,
        message: 'Products List',
        data: product
    })
}

//MODIFY PRODUCT
const modifyProduct = async (request, response) =>{
    const newValues = request.body;
    try{
        const updateProduct = await Products.findByIdAndUpdate(request.params.id, newValues)
        return response.json({
        success: true,
        data: updateProduct,
        message: "Product successfully updated"
        })
    }catch(error){
        console.log(error);
        return response.json({
            success : false,
            message : error.message
        })
    }
}

//DELETE PRODUCT
const deleteProduct = async (request, response) =>{
    try{
        const delete_Product = await Products.findByIdAndDelete(request.params.id)
        return response.json({
        success: true,
        data: delete_Product,
        message: "Product successfully deleted"
        })
    }catch(error){
        console.log(error);
        return response.json({
            success : false,
            message : error.message
        })
    } 
}

module.exports = {
    searchProduct,
    getProductsList, 
    newProduct,
    modifyProduct,
    deleteProduct
};