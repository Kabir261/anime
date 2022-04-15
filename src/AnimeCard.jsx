import React from "react";

const AnimeCard = ({ anime }) => {
  return (
    
      <div className="anime">
        <div>
          <h1 className="anime__name">Name</h1><span>{anime.anime}</span>
        </div>

        <div>
          <h1 className="character__name">Character</h1><span>{anime.character}</span>
          <h1 className="anime__quote">Quote</h1><span>{anime.quote}</span>
        </div>
      </div>

  );
};

export default AnimeCard;
