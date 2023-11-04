// export default Cart;

import React, { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import { Row, Col, ListGroup } from 'react-bootstrap'
import CartItem from './CartItem'

// import { PayPalButtons } from '@paypal/react-paypal-js'

function Cart() {
    const { cart } = useContext(CartContext)
    console.log("cart: ", cart.items)
    // const style = { "layout": "vertical" };
    // const [isPaid, setIsPaid] = useState(false)
    //iva varia segun el pais 
    const IVA = 0.16

    // const handleCreateOrder = (data, actions) => {
    //     const order = actions.order.create({
    //         purchase_units: [
    //             {
    //                 amount: {
    //                     value: (cart.amount * (1 + IVA)).toFixed(2),
    //                     currency_code: "MXN"
    //                 },
    //                 description: "Compra de productos en UCamp Store",
    //                 shipping_preference: "NO_SHIPPING"
    //             }
    //         ],
    //         merchant_name: "UCamp Store"

    //     })

    //     console.log("order", order)

    //     return order

    // }

    // const handleCancelledPayment = (data, actions) => {
    //     console.log("data", data)
    //     console.log("actions", actions)

    // }

    // const handlePaidOrder = (data, actions) => {
    //     console.log("data", data)
    //     console.log("actions", actions)
    //     setIsPaid(true)
    // }
    return (
        <>
            <div className='main-title'>
                <h2>CART</h2>
            </div ><br />
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
                                                    <h5>Quantity</h5>
                                                </Col>
                                                <Col>
                                                    <h5>Product</h5>
                                                </Col>
                                                <Col>
                                                    <h5>Detail</h5>
                                                </Col>
                                                <Col>
                                                    <h5>Price</h5>
                                                </Col>
                                                <Col>
                                                    <h5>Subtotal</h5>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                        {
                                            cart.items.map((item, index) => {
                                                return (
                                                    <ListGroup.Item key={index}>
                                                        <CartItem item={item} />
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
                                    <span className='text-bold'> Amount <sub>(Subtotal + Tax)</sub></span>: {cart.amount * (1 + IVA)}
                                </Col>
                            </Row>
                            <hr />

                        </>
                    ) : (
                        <>
                            <br /><br /><br /><br /><br />
                            <h1>No products in the Cart</h1>
                            <br /><br /><br /><br /><br />
                        </>
                    )
                }
            </div>
        </>
    )
}

export default Cart