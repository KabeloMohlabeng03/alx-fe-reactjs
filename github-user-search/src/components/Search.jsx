import React, { useState } from 'react';
import { searchUsers } from '../services/githubService';

function Search() {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);

  const handleSearch = async () => {
    if (query.trim() === '') return;
    try {
      const results = await searchUsers(query);
      setUsers(results);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search GitHub Users"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <div>
        {users.map((user) => (
          <div key={user.id}>
            <img src={user.avatar_url} alt={`${user.login} avatar`} width="50" />
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              {user.login}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
