import React, { FC, ReactNode, createContext, useContext, useState } from 'react';
import { Pokemon } from '../types/Pokemon';

interface AddToCartContextType {
    cart: Pokemon[];
  addToCart: (pokemon: Pokemon) => void;
}

const AddToCartContext = createContext<AddToCartContextType | undefined>(undefined);

export const useAddToCart = () => {
  const context = useContext(AddToCartContext);
  if (!context) {
    throw new Error('useAddToCart must be used within a AddToCartProvider');
  }
  return context;
};

interface AddToCartProviderProps {
    children: ReactNode;
  }

export const AddToCartProvider: FC<AddToCartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Pokemon[]>([]);

  const addToCart = (pokemon: Pokemon) => {
    setCart(prevCart => [...prevCart, pokemon]);
  };

  return (
    <AddToCartContext.Provider value={{ cart, addToCart }}>
      {children}
    </AddToCartContext.Provider>
  );
};
