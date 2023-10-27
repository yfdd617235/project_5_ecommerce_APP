import React, { useContext, useEffect, useState } from 'react'
// import { ToastContainer} from 'react-toastify';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './products.css'
import { CartContext } from '../../context/cartContext';

function Products() {
  const {addProduct} = useContext(CartContext)
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:3001/products/getProductsList').then(req =>req.json()).then(result => setProducts(result.data))
  },[])
  const addProd = (product) =>{
    addProduct(product)
  }

  return (
    <>
      <div className='menu'>
        <div className='menu-title'>
          <h2>PRODUCTS LIST</h2>
        </div >
        <div className='cards'>
          {products.map((product, index) => {
            return (
              <Card style={{ width: '18rem' }} key={index} className='card text'>
                <Card.Img variant="top" src={product.img} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>
                    {product.description}
                  </Card.Text>
                  <Card.Text>
                    Stock: {product.stock}
                  </Card.Text>
                  <Button variant="dark">Price {product.price} USD</Button>
                  <Button variant="warning" onClick={() => addProd(product)}> Add to Cart </Button>
                </Card.Body>
              </Card>
            )
          }
          )}
        </div>
      </div>
      {/* <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="Colored"
      />
      <ToastContainer /> */}
    </>
  );
}

export default Products