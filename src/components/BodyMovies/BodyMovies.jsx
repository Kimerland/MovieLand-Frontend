import React, { useState, useEffect } from "react";
import movies from "./dataMovies";
import styles from "./BodyMovies.module.scss";

const BodyMovies = () => {
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [filtredMovies, setFiltredMovies] = useState([]);

  useEffect(() => {
    if (selectedGenre === "All") {
      setFiltredMovies(movies);
    } else {
      setFiltredMovies(movies.filter((movie) => movie.genre === selectedGenre));
      // a new array containing only those movies whose movie.genre === selected.genre
    }
  }, [selectedGenre]); // useEffect will be work every time when selectedGenre was change

  return (
    <main className={styles.main}>
      <p>All Films ({movies.length})</p>
      <div>
        <button>
          Genre
          <select onChange={(e) => setSelectedGenre(e.target.value)}>
            <option value="All">All</option>
            <option value="Action">Action</option>
            <option value="Golden Globe Winner">Golden Globe Winner</option>
            <option value="Fiction">Fiction</option>
          </select>
        </button>

        {/* button sort by raiting */}
        <button>Sort by IMDb</button>

        {/* <img src="arrow_drop_down.svg" />  */}

        {/* make poster for my card */}
        {filtredMovies.map((movie) => (
          <div key={movie.id}>
            <p>
              {movie.title} {movie.genre} {movie.rating} {movie.description}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default BodyMovies;
