import { useEffect, useState } from "react";

import { FaRegFaceLaughSquint } from "react-icons/fa6";
import { FaRegFaceSadCry } from "react-icons/fa6";


import getRandomChuckNorrisJoke from "./chuckNorrisJokesApi.js";

import getRandomDadJoke from "./dadJokesApi.js";

function App() {
  const [chuckNorrisJoke, setChuckNorrisJoke] = useState({
    setup: "",
    punchline: "",
  });
  const [dadJoke, setDadJoke] = useState({ setup: "", punchline: "" });
  const [joke, setJoke] = useState(null);


  const fetchChuckNorrisJoke = async () => {
    try {
      const data = await getRandomChuckNorrisJoke();
      const newJoke = { setup: data.value, punchline: "" };
      setChuckNorrisJoke(newJoke);
      setJoke(newJoke);
      
    } catch (error) {
      setJoke({setup: `Server Error, please try again later :(`, punchline: ""})
      
      console.log(error);
    }
  };

  const fetchDadJoke = async () => {
    try {
      const data = await getRandomDadJoke();
      const newJoke = {
        setup: data.body[0].setup,
        punchline: data.body[0].punchline,
      };
      setDadJoke(newJoke);
      setJoke(newJoke); 
    } catch (error) {
      console.log(error);
    }
  };

  const getChuckNorrisJoke = () => {
    fetchChuckNorrisJoke();
  };

  const getDadJoke = () => {
    fetchDadJoke();
  };

  return (
    <div className="min-h-screen bg-gray-500">
      <div className="text-lg text-yellow-300 flex items-center justify-center pt-10">
        Click one of the buttons and start laughing{" "}
        <FaRegFaceLaughSquint className="ml-2" />
      </div>

      <div className="flex items-center justify-center p-4 lg:flex-row flex-col">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 my-2 mx-5 sm:my-5 rounded sm:w-auto"
          onClick={getChuckNorrisJoke}
        >
          Get a Chuck Norris Joke
        </button>

        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 my-2 mx-5 sm:my-5 rounded sm:w-auto"
          onClick={getDadJoke}
        >
          Get a Dad Joke
        </button>
      </div>

      {joke ? (
        <div className="flex items-center justify-center bg-gray-500">
          <div
            className="
          flex flex-col items-center 
          justify-center 
          bg-gray-500
          text-white 
          border 
          border-shadow-4
        border-gray-300 
          shadow-md 
          p-4 
          rounded-lg 
          text-lg
        "
            style={{ minWidth: "150px", maxWidth: "500px" }}
          >
            {" "}
            <div className="ml-0">{joke.setup}</div>
            {joke.punchline && (
              <div className="text-gray-300 mt-5 ml-0">{joke.punchline} </div>
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
