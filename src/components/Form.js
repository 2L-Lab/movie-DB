import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "./Cards";

const Form = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  console.log(input);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=db352d55b86c0b82aa9e7389911a9992&query=" +
          input
      )
      .then((res) => setData(res.data.results));
  }, [input]);

  return (
    <div className="form">
      <div className="form-container">
        <form>
          <input
            type="text"
            placeholder="Entrez le titre d'un film"
            id="search-input"
            onChange={(e) => setInput(e.target.value)}
          />
        </form>
        <div className="btn-sort-container">
          <div className="btn-sort" id="goodToBad">
            <button>
              top<span>&#8593;</span>
            </button>
          </div>
          <div className="btn-sort" id="badToGood">
            <button>
              flop<span>&#8595;</span>
            </button>
          </div>
        </div>
      </div>
      <div className="result">
        {data &&
          data
            .sort()
            .slice(0, 12)
            .map((movie) => <Cards key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Form;
