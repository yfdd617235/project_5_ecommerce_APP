import React, { useEffect, useState } from 'react'
import { productsList } from './productsList.js'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './products.css'

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:3001/products/getProductsList').then(req =>req.json()).then(result => setProducts(result.data))
  },[])

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
                  <Button variant="warning"> Add to Cart </Button>
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