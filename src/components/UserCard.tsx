// src/components/UserCard.tsx
import React from 'react';
import { useFavorites } from '../context/FavoritesContexts';
import '../App.css';

interface UserCardProps {
  user: {
    id: number;
    name: string;
    email: string;
    address: {
      city: string;
    };
  };
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  const isFavorite = favorites.includes(user.id);

  return (
    <div className={`user-card ${isFavorite ? 'favorite' : ''}`}>
      <h3>{user.name}</h3>
      <h4>{user.email}</h4>
      <p>City: {user.address.city}</p>
      <button onClick={() => (isFavorite ? removeFavorite(user.id) : addFavorite(user.id))}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default UserCard;
