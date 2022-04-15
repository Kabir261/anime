import React, { useState, useEffect } from "react";
import axios from "axios";

import AnimeCard from "./AnimeCard";

import "./App.scss";

const Api_Url = "https://animechan.vercel.app/api/quotes/anime?";

const App = () => {
  const [animes, setAnimes] = useState([]);
  const [searchTerm, setSearchTerm] = useState(" ");

  const searchAnime = async (name) => {
    const response = await axios(`${Api_Url}title=${name}`);

    console.log(response.data);

    setAnimes(response.data);
  };

  useEffect(() => {
    searchAnime('naruto');
  }, []);
  return (
    <div className="container">
      <h1 className="main__headiing">Anime Quotes</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Search for quotes"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" value="Search" onClick={() => searchAnime(searchTerm)} > Search </button>    
        </div>

        {
                animes.length > 0
                    ? (
                        <div className="container__anime">
                            {
                                animes.map((anime) => (
                                    <AnimeCard anime={anime} />
                                ))
                            }
                        </div>
                    ) : (
                        <div className="empty">
                            <h2>No quotes found</h2>
                        </div>
                    )
            }

    </div>
  );
};

export default App;
