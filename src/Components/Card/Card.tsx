import React, { FC, useEffect, useState } from "react";
import "./Card.css";
import { useAddToCart } from "../../Provider/AddToCartContext";
import { Pokemon } from "../../types/Pokemon";

interface CardProps {
  pokemon: Pokemon;
}

const Card: FC<CardProps> = ({ pokemon }) => {

  const { addToCart } = useAddToCart(); 

  const handleAddToCart = () => {
    addToCart(pokemon);
  };
    return (
      <div className="card">
        <img src={pokemon?.images?.small} alt={pokemon.name} />
        <h3>{pokemon.name}</h3>
        <p>{pokemon.id}€</p>
        <button onClick={handleAddToCart} className="btn btn-warning">
          Add To Cart
        </button>
      </div>
    );
  };

  export default Card;
