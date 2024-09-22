import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_GITHUB_API_URL,
  headers: {
    Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
  },
});

export const searchUsers = async (query) => {
  try {
    const response = await api.get(`/search/users?q=${encodeURIComponent(query)}`);
    return response.data.items;
  } catch (error) {
    console.error('Error searching users:', error);
    throw error;
  }
};
