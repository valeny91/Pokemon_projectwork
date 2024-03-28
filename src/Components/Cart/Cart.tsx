import React, { FC, useState } from 'react'
import './Cart.css'
import { Link } from 'react-router-dom';
import { useAddToCart } from '../../Provider/AddToCartContext';
import { Pokemon } from '../../types/Pokemon';


const Cart = () => {
    const {cart} = useAddToCart();
   

    return (
        <div className=" mx-5">
            <Link to="/cart-inside">
            <i className="ri-shopping-cart-line cart"></i>
            </Link>
            <div>
                <span className='cart-container_tot'>
                    {cart.length}
                </span>
            </div>
        </div>
    )
}

export default Cart 