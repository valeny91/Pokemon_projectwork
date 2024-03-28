import React, { FC, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { useAddToCart } from '../../Provider/AddToCartContext'
import { Pokemon } from '../../types/Pokemon';

const CartInside= () => {
    const { cart, removeFromCart} = useAddToCart();  
  
  ;
  return (
    <>
      <Navbar/>
        <div>
            {cart.map((pokemon, index) => (
                <div key={index}>
                    <h1>{pokemon.name}</h1>
                    <img src={pokemon.images.small} alt={pokemon.name} />
                    <button onClick={() => removeFromCart(index)} className="btn btn-danger">
                        Remove
                    </button>
                </div>
            ))}
        </div>
    </>
  )
}

export default CartInside
