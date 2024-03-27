import React, { FC, useState } from 'react'
import './Cart.css'


const Cart = () => {
    const [cart, setCart] = useState([{}]);

    const updateCart = (id: number) => {
        setCart((cart) => [...cart, { id, quantity: 1 }]);
        console.log(cart);
    }

    return (
        <div className=" mx-5">
            <a href="#"><i className="ri-shopping-cart-line cart"></i></a>
            <div>
                <button onClick={() => updateCart(1)}>id 1</button>
                <button onClick={() => updateCart(2)}>id 2</button>
                <button onClick={() => updateCart(3)}>id 3</button>
                <span className='cart-container_tot'>
                    {cart.length -1}
                </span>
            </div>
        </div>
    )
}

export default Cart 