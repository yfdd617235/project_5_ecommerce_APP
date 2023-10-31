import { useState, createContext, useEffect } from "react";
const CartContext = createContext();

const initialState = {
    items: [],
    total: 0,
    amount: 0
  }

const CartProvider = ({children}) =>{

    //Obtain the cart from local storage, if it does not exist, it uses the initial state
    const[cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || initialState);

    //Empty the cart, It is set the initialState
    const emptyCart = () => setCart(initialState)

    //search if the product is in the cart and obtain its index
    const findProductInCart = (product) =>{
        
        return cart.items.findIndex(item => item._id === product._id)
        //-1 is does´not exist and 0-n exists and retuns the index
    }

    //Add a product to the cart
    const addProductToCart = (product) => {
        //Loof for if the product is in de cart
        const itemPosition = findProductInCart(product)

        //if the product is in the cart, increase its count
        if (itemPosition !== -1) {
            cart.items[itemPosition].quantity += 1

        } else { // if the product is not in the cart, create it and increase its amount
            cart.items.push({ ...product, quantity: 1 }) // add the product +1
            cart.total += 1 // aumentar el total de productos
        }

        console.log("THEproduct: ",product)
        // increase amount to pay
        cart.amount += product.price

        // Update the status of the cart, hook useEffect updates the localstorage
        setCart({ ...cart })
        console.log(cart)
        //setCart( {items: cart.items, total: cart.total, amount: cart.amout} )
      };

    
    // Delete product from the cart
    const deleteProductFromCart = (product) => {
      // Search the product in the cart and obtain its position
      const itemPosition = findProductInCart(product)

      // if itemPosition is not -1, delete the product from the cart
      if (itemPosition !== -1) {
          cart.items.splice(itemPosition, 1)
          cart.total -= 1
          cart.amount -= product.precio

          // Update the status of the cart, hook useEffect updates the localstorage
          setCart({ ...cart })
      }
      setCart({ ...cart })
    };

    const decreaseProductFromCart = (product) => {
      // Search the product in the cart and obtain its position
      const itemPosition = findProductInCart(product)

      // if itemPosition is not -1, decrease the quantity of product and the ammount to pay
      if (itemPosition !== -1) {
          if (cart.items[itemPosition].quantity === 1) {
              deleteProductFromCart(product)
          } else {
              cart.items[itemPosition].quantity -= 1
              cart.amount -= product.precio

              // Update the status of the cart, hook useEffect updates the localstorage
              setCart({ ...cart })
          }
      }
      setCart({ ...cart })
    }
    
    //Hook of useEffect is executed each time the status of the cart changes, each setCart
    useEffect(() => {
      // actualizar el localStorage
      localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    return(
        <CartContext.Provider value={{cart, setCart, emptyCart, deleteProductFromCart, addProductToCart, decreaseProductFromCart}}>
            {children}
        </CartContext.Provider>
    )
}

// const useCart = () => useContext(CartContext);

export {CartContext, CartProvider}