import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "./Cards";

const Form = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=db352d55b86c0b82aa9e7389911a9992&query=ocean"
      )
      .then((res) => setData(res.data.results));
  }, []);

  console.log(data);

  return (
    <div className="form">
      <div className="form-container">
        <form>
          <input
            type="text"
            placeholder="Entrez le titre d'un film"
            id="search-input"
            required
          />
          <input type="submit" value="Recherchez"></input>
        </form>
        <div className="btn-sort-container">
          <div className="btn-sort" id="goodToBad">
            top<span>&#8593;</span>
          </div>
          <div className="btn-sort" id="badToGood">
            flop<span>&#8595;</span>
          </div>
        </div>
      </div>
      <div className="result">
        {data.map((movie) => (
          <Cards key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Form;
