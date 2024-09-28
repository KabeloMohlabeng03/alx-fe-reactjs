import React, { useState } from 'react';
import { fetchUsers } from '../services/githubService'; 

function Search() {
  const [query, setQuery] = useState(''); 
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState(''); 
  const [users, setUsers] = useState([]); 
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setPage(1); 
    try {
      const data = await fetchUsers(query, location, minRepos, 1); 
      setUsers(data.items);
    } catch (error) {
      setError('Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    setLoading(true);
    try {
      const nextPage = page + 1;
      const { items } = await fetchUsers(query, location, minRepos, nextPage); // Fetch the next page
      setUsers([...users, ...items]); 
      setPage(nextPage); 
    } catch (error) {
      setError('Error loading more results');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded-md shadow">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Username</label>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            placeholder="GitHub username"
          />
        </div>
        <div>
          <label className="block text-gray-700">Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            placeholder="Location"
          />
        </div>
        <div>
          <label className="block text-gray-700">Minimum Repositories</label>
          <input
            type="number"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            placeholder="Min repos"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500"
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      <div className="mt-4">
        {users.map((user) => (
          <div key={user.id} className="flex items-center space-x-4 mb-4">
            <img src={user.avatar_url} alt="avatar" className="w-12 h-12 rounded-full" />
            <div>
              <a href={user.html_url} className="text-blue-600" target="_blank" rel="noopener noreferrer">
                {user.login}
              </a>
              <p className="text-gray-600">Repos: {user.public_repos}</p>
            </div>
          </div>
        ))}
      </div>

      {users.length > 0 && (
        <button
          onClick={loadMore}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500 mt-4"
          disabled={loading}
        >
          {loading ? 'Loading more...' : 'Load More'}
        </button>
      )}
    </div>
  );
}

export default Search;
