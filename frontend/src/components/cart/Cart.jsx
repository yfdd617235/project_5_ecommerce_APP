// import React, {useContext} from 'react';
// import { CartContext } from '../../context/cart';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import * as Icon from 'react-icons/fa6'

// const Cart = () => {
//     const  {cart}  = useContext(CartContext)
//     console.log("cart: ",cart)
//     return (
//         <>
//         CART
//             <div>
//                 {cart.items.map(cartItem => {
//                     return (
//                         <Card style={{ width: '18rem' }}  className='card text'>
//                             <Card.Img variant="top" src={cartItem.img} />
//                             <Card.Body>
//                                 <Card.Title>{cartItem.name}</Card.Title>
//                                 <Card.Text>
//                                     {cartItem.description}
//                                 </Card.Text>
//                                 <Button variant="dark">Price {cartItem.price} USD</Button>
//                                 <Button variant="primary"> + </Button>
//                                 <Button variant="primary"> - </Button>
//                                 <Button variant="danger"> <Icon.FaTrash/> </Button>
//                             </Card.Body>
//                         </Card>
//                     )
//                 })}

//             </div>
//         </>
//     );
// }

// export default Cart;

import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/cartContext'
import { Row, Col, ListGroup, Alert } from 'react-bootstrap'
import CartItem from './CartItem'

// import { PayPalButtons } from '@paypal/react-paypal-js'

function Cart() {
    const { cart } = useContext(CartContext)
    console.log("cart: ", cart.items)
    const style = { "layout": "vertical" };
    const [isPaid, setIsPaid] = useState(false)
    //iva varia segun el pais 
    const IVA = 0.16

    const handleCreateOrder = (data, actions) => {
        const order = actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: (cart.amount * (1 + IVA)).toFixed(2),
                        currency_code: "MXN"
                    },
                    description: "Compra de productos en UCamp Store",
                    shipping_preference: "NO_SHIPPING"
                }
            ],
            merchant_name: "UCamp Store"

        })

        console.log("order", order)

        return order

    }

    const handleCancelledPayment = (data, actions) => {
        console.log("data", data)
        console.log("actions", actions)

    }

    const handlePaidOrder = (data, actions) => {
        console.log("data", data)
        console.log("actions", actions)
        setIsPaid(true)
    }
    return (
        <>
            <div>
                {cart.items && cart.items.length > 0 ?
                    (
                        <>
                            <Row>
                                <Col>
                                    <ListGroup>
                                        <ListGroup.Item>
                                            <Row>
                                                <Col md={2}>
                                                    <Alert variant="secondary">Quantity</Alert>
                                                </Col>
                                                <Col>
                                                    <Alert variant="secondary">Product</Alert>
                                                </Col>
                                                <Col>
                                                    <Alert variant="secondary">Detail</Alert>
                                                </Col>
                                                <Col>
                                                    <Alert variant="secondary">Price</Alert>
                                                </Col>
                                                <Col>
                                                    <Alert variant="secondary">Subtotal</Alert>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                        {
                                            cart.items.map(item => {
                                                return(
                                                    <ListGroup.Item>
                                                            <CartItem item = {item}/>
                                                    </ListGroup.Item>
                                                )
                                            })
                                        }
                                    </ListGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    Productos:{cart.total}

                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    Subtotal: {cart.amount}
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <span className='text-bold'> A pagar <sub>(Subtotal + IVA)</sub></span>: {cart.amount * (1 + IVA)}
                                </Col>
                            </Row>
                            <hr />




                        </>
                    ) : (
                        <h1>No products in the Cart</h1>
                    )
                }
            </div>
        </>
    )
}

export default Cart