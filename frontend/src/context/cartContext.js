import { useState, useContext, createContext, useEffect } from "react";

const CartContext = createContext();
const CartProvider = ({children}) =>{
    const[cart, setCart] = useState([]);

    const emptyCart = () => setCart([])


    const findProdInCart = (product) =>{
        console.log("Product test 1: ", product)
        return cart.findIndex(cartItem => cartItem.id === product.id)
        //-1 is does´not exist and 0-n exists and retuns the index
    }

    const deleteProduct = (product) =>{
        const indexItem = findProdInCart(product)
        if (indexItem !== -1){
            cart.splice(indexItem, 1) 
        }
    }

    // const addProduct = (product) =>{
    //     console.log("Product test 2: ", product)
    //     const indexItem = findProdInCart(product)
    //     if (indexItem !== -1){
    //         console.log("Product test 3: ", product)
    //     }else{
    //         cart.push({ ...product})
    //         console.log("Product test 4: ", product)
    //     }

    //     setCart(cart)
    //     console.log("Cart: ", cart)
    // }

    const addProduct = (product) => {
        const indexItem = findProdInCart(product);
        if (indexItem !== -1) {
          const newCart = [...cart]; // Crear una nueva copia del carrito
          // Modificar la copia (por ejemplo, aumentar la cantidad del producto en lugar de agregarlo nuevamente)
          newCart[indexItem].quantity += 1;
          setCart(newCart); // Establecer la nueva copia como el estado
        } else {
          const newCart = [...cart, { ...product, quantity: 1 }]; // Agregar un nuevo producto con cantidad 1
          setCart(newCart); // Establecer la nueva copia como el estado
        }
      };
    

    useEffect(()=>{
        let currentCart = localStorage.getItem("cart")
        if(currentCart) setCart(JSON.parse(currentCart))
    },[])

    return(
        <CartContext.Provider value={{cart, setCart, emptyCart, deleteProduct, addProduct}}>
            {children}
        </CartContext.Provider>
    )
}

// const useCart = () => useContext(CartContext);

export {CartContext, CartProvider}