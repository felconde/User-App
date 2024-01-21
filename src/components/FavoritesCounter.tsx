import React from 'react';
import { useFavorites } from '../context/FavoritesContexts';
import '../App.css';

const FavoritesCounter: React.FC = () => {
  const { favorites } = useFavorites();

  return (
    <div className="favorites-counter">
      <p>Favorites: {favorites.length}</p>
    </div>
  );
};

export default FavoritesCounter;
