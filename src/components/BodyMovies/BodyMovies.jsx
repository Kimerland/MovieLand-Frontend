import React, { useState, useEffect } from "react";
import movies from "./dataMovies";
import styles from "./BodyMovies.module.scss";
import SortBtn from "../SortBtn/SortBtn";
import WatchlistBtn from "../WatchlistBtn/WatchlistBtn";
import ViewDetails from "../ViewDetails/ViewDetails";

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
      <div className={styles.filter_container}>
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
        <SortBtn
          filtredMovies={filtredMovies}
          setFiltredMovies={setFiltredMovies}
        />
      </div>
      {filtredMovies.map((movie) => (
        <div key={movie.id} className={styles.card}>
          <img src={movie.poster} className={styles.images} />
          <div className={styles.card_contnet}>
            <p className={styles.card_text}>{movie.title}</p>
            <button className={styles.genre_btn}>{movie.genre}</button>

            <div className={styles.raiting_body}>
              <img src="IMDB.svg" className={styles.img_imdb} />
              <p className={styles.raiting_text}>
                {movie.rating} <img src="star-icon.svg" />
              </p>
            </div>

            <p className={styles.describe_text}> {movie.description}</p>
            <div className={styles.important_btns}>
              <ViewDetails movie={movie} />

              <WatchlistBtn movie={movie} />
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default BodyMovies;
