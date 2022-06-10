import React from "react";

const Cards = ({ movie }) => {
  return (
    <div className="card-container">
      <div className="card">
        <h2>{movie.original_title}</h2>
        <img
          src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
          alt={"affiche du film :" + movie.title}
        />

        <p>Sortie le : {movie.release_date}</p>
        <div className="vote-container">
          <span>{movie.vote_average}</span>
          <span>{movie.vote_count}</span>
        </div>
      </div>
    </div>
  );
};

export default Cards;
