import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://dad-jokes.p.rapidapi.com',
    headers: {
      'x-rapidapi-key': '2a4daafa84msh16a2a6e42c6bc92p134800jsnbc2e5c155fea',
      'x-rapidapi-host': 'dad-jokes.p.rapidapi.com'
    }
  });
  
  export const getRandomDadJoke = async () => {
    try {
      const response = await apiClient.get('/random/joke');
      return response.data;
    } catch (error) {
      console.error("Error fetching joke:", error);
      throw error;
    }
  };


  export default getRandomDadJoke;
