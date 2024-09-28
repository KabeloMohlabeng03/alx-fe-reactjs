import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users?q=';

export const fetchUsers = async (username, location = '', minRepos = '', page = 1) => {
  try {
    
    let query = `${username}`;

    if (location) {
      query += `+location:${location}`;
    }

    if (minRepos) {
      query += `+repos:>=${minRepos}`;
    }

    const response = await axios.get(`${BASE_URL}${query}&page=${page}`);

    return response.data;
  } catch (error) {
    throw new Error('Error fetching data from GitHub API');
  }
};
