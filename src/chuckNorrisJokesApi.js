import axios from 'axios';


const apiClient = axios.create({
  baseURL: 'https://api.chucknorris.io/jokes'
});


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
