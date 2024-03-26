import React, { useState, useEffect } from "react";
import Card from "./Card";
import { Pokemon } from "../../types/Pokemon";

const CardList = () => {
  const [cards, setCards] = useState<any[]>([]); //salva i dati della chiamata API

  useEffect(() => {
    //effettua la chiamata API
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.pokemontcg.io/v2/cards?pageSize=20"
        );
        if (!response.ok) {
          throw new Error("Errore nella richiesta");
        }
        const data = await response.json();
        setCards(data.data);
      } catch (error) {
        console.error("Si è verificato un errore:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="card-list">
      {cards.map(
        (
          pokemon: Pokemon //indica che stiamo mappando su un array chiamato "cards"
        ) => (
          <Card
            key={pokemon.id}
            pokemon={pokemon} //passa i valori del pokemon
          />
        )
      )}
    </div>
  );
};

export default CardList;
