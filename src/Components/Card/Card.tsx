import React, { useEffect, useState } from "react";

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

const Card: React.FC<CardProps> = ({ pokemon }) => {
  return (
    <div className="card-img">
      <img src={pokemon?.images?.small} alt={pokemon.name} />
      <h3>{pokemon.name}</h3>
    </div>
  );
};

export default Card;
