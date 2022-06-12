import React from "react";

const Cards = ({ movie }) => {
  const date = new Date(movie.release_date);
  const newDate = date.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const genreFinder = () => {
    let genreArray = [];
    for (let i = 0; i < movie.genre_ids.length; i++) {
      switch (movie.genre_ids[i]) {
        case 28:
          genreArray.push(`Action`);
          break;
        case 12:
          genreArray.push(`Aventure`);
          break;
        case 16:
          genreArray.push(`Animation`);
          break;
        case 35:
          genreArray.push(`Comédie`);
          break;
        case 80:
          genreArray.push(`Policier`);
          break;
        case 99:
          genreArray.push(`Documentaire`);
          break;
        case 18:
          genreArray.push(`Drame`);
          break;
        case 10751:
          genreArray.push(`Famille`);
          break;
        case 14:
          genreArray.push(`Fantasy`);
          break;
        case 36:
          genreArray.push(`Histoire`);
          break;
        case 27:
          genreArray.push(`Horreur`);
          break;
        case 10402:
          genreArray.push(`Musique`);
          break;
        case 9648:
          genreArray.push(`Mystère`);
          break;
        case 10749:
          genreArray.push(`Romance`);
          break;
        case 878:
          genreArray.push(`Science-fiction`);
          break;
        case 10770:
          genreArray.push(`Téléfilm`);
          break;
        case 53:
          genreArray.push(`Thriller`);
          break;
        case 10752:
          genreArray.push(`Guerre`);
          break;
        case 37:
          genreArray.push(`Western`);
          break;
        default:
          break;
      }
    }
    return genreArray.map((genre) => <li key={genre}>{genre}</li>);
  };

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
          <span>{movie.vote_average}/10 ⭐</span>
          <ul>
            {movie.genre_ids
              ? genreFinder()
              : movie.genres.map((genre, index) => (
                  <li key={index}>{genre.name}</li>
                ))}
          </ul>
          {movie.overview ? <h3>Synopsis :</h3> : ""}
          {movie.overview}
        </div>

        <button className="btn">Ajouter aux coups de coeur &#10084;</button>
      </div>
    </div>
  );
};

export default Cards;
