import React, { useContext, useEffect, useState } from 'react'
// import { ToastContainer} from 'react-toastify';
import Camera from './imgs/Camera.jpg'
import Laptop from './imgs/Laptop.jpg'
import SMART_TV from './imgs/SMART_TV.jpg'
import Smartwatch from './imgs/Smartwatch.jpg'
import Cellphone from './imgs/Cellphone.jpg'
import Portable_Screen from './imgs/Portable_Screen.jpg'
import Tablet from './imgs/Tablet.jpg'
import { toast } from 'react-toastify';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CartContext } from '../../context/cartContext';
import './products.css'

const productImages = {
  Camera: Camera,
  Laptop: Laptop,
  SMART_TV: SMART_TV,
  Smartwatch: Smartwatch,
  Cellphone: Cellphone,
  Portable_Screen: Portable_Screen,
  Tablet: Tablet
};

function Products() {
  const {addProductToCart} = useContext(CartContext)
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    fetch('https://project-5-ecommerce-backend.onrender.com/products/getProductsList').then(req =>req.json()).then(result => setProducts(result.data))
    // fetch('http://localhost:3001/products/getProductsList').then(req =>req.json()).then(result => setProducts(result.data))
  },[])
  
  const addProd = (product) =>{
    addProductToCart(product)
    toast.success('Product added to the cart!', {
      position: "top-right",
      autoClose: 3500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      })
  }

  // products.map((product) => {
  //   console.log("Products name: ", product.name)
  // })
  return (
    <>
      <div className='main'>
        <div className='main-title'>
          <h2>PRODUCTS LIST</h2>
        </div >
        <div className='cards'>
          {products.map((product, index) => {
            const productImage = productImages[product.name];
            return (
              
              <Card style={{ width: '18rem' }} key={index} className='card text'>
                <Card.Img variant="top" src={productImage} alt={product.name}/>
                <Card.Body>
                  <Card.Title>
                    <h4>{product.name}</h4><br />
                    </Card.Title>
                  <Card.Text>
                    {product.description}
                  </Card.Text>
                  {/* <Card.Text>
                    Stock: {product.stock}
                  </Card.Text> */}
                  <Card.Text>
                  <h6>Price {product.price} USD</h6>
                  </Card.Text>  
                  <Button variant="warning" onClick={() => addProd(product)}> Add to Cart </Button>
                </Card.Body>
              </Card>
            )
          }
          )}
        </div>
      </div>
    </>
  );
}

export default Products