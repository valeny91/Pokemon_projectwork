import React, { createContext, useState, ReactNode } from "react";

interface Pokemon {
  id: number;
  name: string;
}

interface PokemonContextType {
  pokemons: Pokemon[];
}

export const PokemonContext = createContext<PokemonContextType | undefined>(
  undefined
);

export const PokemonProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [pokemons] = useState<Pokemon[]>([
    { id: 1, name: "Bulbasaur" },
    { id: 2, name: "Charmander" },
    { id: 3, name: "Squirtle" },
    // Aggiungi altri pokemon se necessario
  ]);

  return (
    <PokemonContext.Provider value={{ pokemons }}>
      {children}
    </PokemonContext.Provider>
  );
};
