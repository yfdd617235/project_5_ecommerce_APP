import {useContext} from 'react'
import {Row, Col, Badge, Button, Alert} from 'react-bootstrap'
import { CartContext } from '../../context/cartContext'


function CartItem({item}) {
    const { decreaseProductFromCart, addProductToCart } = useContext(CartContext)

    return(
        <Row>
            <Col md={2}>
                <Button variant="light" className='m-2 mt-0' onClick={
                    () => {decreaseProductFromCart(item)}
                }>-</Button>
                <Badge bg="dark" style={{ fontSize: '1.1em' }}>{item.quantity}</Badge>
                <Button variant="success" className='m-2 mt-0' onClick={
                    () => {addProductToCart(item)}
                }>+</Button>
            </Col>
            <Col>
                {item.name}
            </Col>
            <Col>
                {item.description && item.description.length? (
                        item.description
                    ): (
                        <Alert variant='warning'>No hay descripción</Alert>
                    )
                }
            </Col>
            <Col>
                { item.price}
            </Col>

            <Col>
                { item.price * item.quantity }
            </Col>
        </Row>
    )
}

export default CartItem