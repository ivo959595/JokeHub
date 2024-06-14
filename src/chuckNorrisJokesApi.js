import axios from 'axios';

// Create an axios instance with the base URL for Chuck Norris jokes API
const apiClient = axios.create({
  baseURL: 'https://api.chucknorris.io/jokes'
});

// Function to fetch a random Chuck Norris joke
export const getRandomChuckNorrisJoke = async () => {
  try {
    const response = await apiClient.get('/random');
    return response.data;
  } catch (error) {
    console.error("Error fetching joke:", error);
    throw error;
  }
};

export default getRandomChuckNorrisJoke;
