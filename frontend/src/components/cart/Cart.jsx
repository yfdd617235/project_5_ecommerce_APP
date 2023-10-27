import React, {useContext} from 'react';
import { CartContext } from '../../context/cartContext';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import * as Icon from 'react-icons/fa6'

const Cart = () => {
    const  {cart}  = useContext(CartContext)
    return (
        <>
        CART
            <div>
                {cart.map(cartItem => {
                    return (
                        <Card style={{ width: '18rem' }}  className='card text'>
                            <Card.Img variant="top" src={cartItem.img} />
                            <Card.Body>
                                <Card.Title>{cartItem.name}</Card.Title>
                                <Card.Text>
                                    {cartItem.description}
                                </Card.Text>
                                <Button variant="dark">Price {cartItem.price} USD</Button>
                                <Button variant="primary"> + </Button>
                                <Button variant="primary"> - </Button>
                                <Button variant="danger"> <Icon.FaTrash/> </Button>
                            </Card.Body>
                        </Card>
                    )
                })}

            </div>
        </>
    );
}

export default Cart;
