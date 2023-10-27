import { useState, useContext, createContext, useEffect } from "react";

const CartContext = createContext();
const CartProvider = ({children}) =>{
    const[cart, setCart] = useState([]);

    const emptyCart = () => setCart([])


    const findProdInCart = (product) =>{
        return cart.findIndex(cartItem => cartItem.id === product.id)
    }

    const deleteProduct = (product) =>{
        const indexItem = findProdInCart(product)
        if (indexItem !== -1){
            cart.splice(indexItem, 1) 
        }
    }

    const addProduct = (product) =>{
        const indexItem = findProdInCart(product)
        if (indexItem !== -1){
            
        }else{
            cart.push({...product})
        }
    }



    useEffect(()=>{
        let currentCart = localStorage.getItem("cart")
        if(currentCart) setCart(JSON.parse(currentCart))
    },[])

    return(
        <CartContext.Provider value={[cart, setCart]}>
            {children}
        </CartContext.Provider>
    )
}

const useCart = () => useContext(CartContext);

export {useCart, CartProvider}