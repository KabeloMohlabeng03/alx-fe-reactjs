import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users';

export const fetchUsers = async (query, location, minRepos) => {
  let searchQuery = query ? `user:${query}` : '';
  
  if (location) {
    searchQuery += ` location:${location}`;
  }

  if (minRepos) {
    searchQuery += ` repos:>=${minRepos}`;
  }

  try {
    const response = await axios.get(`${BASE_URL}?q=${encodeURIComponent(searchQuery)}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching data from GitHub API');
  }
};
