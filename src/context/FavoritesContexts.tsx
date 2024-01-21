import React, { createContext, useContext, ReactNode, useState } from 'react';

interface FavoritesContextProps {
  favorites: number[];
  addFavorite: (id: number) => void;
  removeFavorite: (id: number) => void;
}

const FavoritesContext = createContext<FavoritesContextProps | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<number[]>([]);

  const addFavorite = (id: number) => {    
    setFavorites(prevFavorites => [...prevFavorites, id]);
  };

  const removeFavorite = (id: number) => {
    setFavorites(prevFavorites => prevFavorites.filter(favId => favId !== id));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) throw new Error('useFavorites must be used within a FavoritesProvider');
  return context;
};
