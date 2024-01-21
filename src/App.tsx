import React from 'react';
import './App.css';
import { FavoritesProvider } from './context/FavoritesContexts';
import UserSearch from './components/UserSearch';
import FavoritesCounter from './components/FavoritesCounter';

const App: React.FC = () => {
  return(
    <FavoritesProvider>
      <div className='container'>      
      <FavoritesCounter />
        <UserSearch />
      </div>
    </FavoritesProvider>
  )
}

export default App;
