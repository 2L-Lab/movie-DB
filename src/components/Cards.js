import React from "react";

const Cards = ({ movie }) => {
  return (
    <div className="card-container">
      <div className="card">
        <h2>{movie.original_title}</h2>
        <p>{movie.overview}</p>
        <p>Sortie le : {movie.release_date}</p>
      </div>
    </div>
  );
};

export default Cards;
