import React, { FC, useEffect, useState } from "react";
import "./Card.css";

interface Pokemon {
  id: string;
  name: string;
  images: {
    small: string;
    large: string;
  };
}

interface CardProps {
  pokemon: {
    images: {
      small: string;
      large: string;
    };
    id: number;
    name: string;
  };
}

const Card: FC<CardProps> = ({ pokemon }) => {
  return (
    <div className="card">
      <img src={pokemon?.images?.small} alt={pokemon.name} />
      <h3>{pokemon.name}</h3>
    </div>
  );
};

export default Card;
