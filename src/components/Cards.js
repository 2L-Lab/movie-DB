import React from "react";

const Cards = ({ movie }) => {
  const date = new Date(movie.release_date);
  const newDate = date.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="card-container">
      <div className="card">
        <h2>{movie.original_title}</h2>
        <img
          src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
          alt={"affiche du film :" + movie.title}
        />

        {movie.release_date ? (
          <p> sortie le : {newDate}</p>
        ) : (
          <p>Date de sortie inconnue</p>
        )}
        <div className="vote-container">
          <span>{movie.vote_average}/10 &#9733;</span>
        </div>
      </div>
    </div>
  );
};

export default Cards;
