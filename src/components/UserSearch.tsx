// src/components/UserSearch.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from './UserCard';
import '../App.css';

const UserSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
      setUsers(response.data);
    });
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.address.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>User App</h1>
      <input
        type="text"
        placeholder="Search by name or city"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      {filteredUsers.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserSearch;
