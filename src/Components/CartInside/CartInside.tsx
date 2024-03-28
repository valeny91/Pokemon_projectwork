import React from 'react'
import Navbar from '../Navbar/Navbar'
import { useAddToCart } from '../../Provider/AddToCartContext'

const CartInside = () => {
    const { cart } = useAddToCart();

   
  
  ;
  return (
    <>
      <Navbar/>
        <div>
            {cart.map((pokemon, index) => (
                <div key={index}>
                    <h1>{pokemon.name}</h1>
                    <img src={pokemon.images.small} alt={pokemon.name} />
                </div>
            ))}
        </div>
    </>
  )
}

export default CartInside
