import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "./Cards";

const Form = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [sortGoodBad, setSortGoodBad] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=db352d55b86c0b82aa9e7389911a9992&query=" +
          input
      )
      .then((res) => setData(res.data.results));
  }, [input]);

  return (
    <div className="form-component">
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
          <div
            className="btn-sort"
            id="goodToBad"
            onClick={() => setSortGoodBad("goodToBad")}
          >
            top<span>➜</span>
          </div>

          <div
            className="btn-sort"
            id="badToGood"
            onClick={() => setSortGoodBad("badToGood")}
          >
            flop<span>➜</span>
          </div>
        </div>
      </div>
      <div className="result">
        {data &&
          data
            .slice(0, 12)
            .sort((a, b) => {
              if (sortGoodBad === "goodToBad") {
                return b.vote_average - a.vote_average;
              } else if (sortGoodBad === "badToGood") {
                return a.vote_average - b.vote_average;
              }
            })
            .map((movie) => <Cards key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Form;
