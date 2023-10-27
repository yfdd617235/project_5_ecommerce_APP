import { useState, useContext, createContext, useEffect } from "react";

const CartContext = createContext();
const CartProvider = ({children}) =>{
    const[cart, setCart] = useState([]);

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