import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production' 
    ? 'https://your-backend-url.herokuapp.com' 
    : '',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const testBackendConnection = async () => {
  try {
    const response = await api.get('/api/hello');
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// Add more API calls here as needed