import React, { useState, useEffect } from "react";
import movies from "./dataMovies";
import styles from "./BodyMovies.module.scss";
import SortBtn from "./SortBtn";

const BodyMovies = () => {
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [filtredMovies, setFiltredMovies] = useState([]);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
    setIsDropdownOpen(false);
  };

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
      <p className={styles.all_films}>All Films ({movies.length})</p>
      <div className={styles.filter_wrapper}>
        <button className={styles.filter_btn}>
          Genre
          <img
            src="arrow_drop_down.svg"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={styles.arrow_icon}
          />
          {isDropdownOpen && (
            <ul className={styles.dropdown_menu}>
              <li onClick={() => handleGenreChange("All")}>All</li>
              <li onClick={() => handleGenreChange("Action")}>Action</li>
              <li onClick={() => handleGenreChange("Golden Globe Winner")}>
                Golden
              </li>
              <li onClick={() => handleGenreChange("Fiction")}>Fiction</li>
            </ul>
          )}
        </button>
      </div>

      {/* button sort by raiting */}
      <SortBtn />

      {filtredMovies.map((movie) => (
        <div key={movie.id}>
          <img src={movie.poster} className={styles.images} />
          <p>
            {movie.title} {movie.genre} {movie.rating} {movie.description}
          </p>
        </div>
      ))}
    </main>
  );
};

export default BodyMovies;
