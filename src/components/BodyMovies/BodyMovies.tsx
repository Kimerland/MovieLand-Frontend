import React, { useState, useEffect } from "react";
import styles from "./BodyMovies.module.scss";
import SortBtn from "../Buttons/SortBtn/SortBtn";
import WatchlistBtn from "../Buttons/WatchlistBtn/WatchlistBtn";
import ViewDetails from "../Buttons/ViewDetails/ViewDetails";
import { ICinema } from "../CinemaContent/CinemaContent";

const BodyMovies: React.FC = () => {
  const [selectedGenre, setSelectedGenre] = useState<string>("All");
  const [filtredMovies, setFiltredMovies] = useState<ICinema[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [movies, setMovies] = useState<ICinema[]>([]);
  const [genres, setGenres] = useState<string[]>([]);

  const handleGenreChange = (genre: string) => {
    setSelectedGenre(genre);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/movies/random");
        const data = await response.json();
        console.log(data);

        setMovies(data);
        setFiltredMovies(data);

        const allGenres = new Set<string>();
        data.forEach((movie: ICinema) => {
          movie.Genre.split(", ").forEach((g) => allGenres.add(g));
        });

        setGenres(["All", ...Array.from(allGenres).sort()]);
      } catch (error) {
        console.log("Error", error);
      }
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    if (selectedGenre === "All") {
      setFiltredMovies(movies);
    } else {
      setFiltredMovies(
        movies.filter((movie) => movie.Genre.includes(selectedGenre))
      );
    }
  }, [selectedGenre, movies]);

  return (
    <main className={styles.main}>
      <p className={styles.all_films}>All Films ({movies.length})</p>
      <div className={styles.filter_container}>
        <div className={styles.filter_wrapper}>
          <button
            className={styles.filter_btn}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            Genre
            <img
              src="arrow_drop_down.svg"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`${styles.arrow_icon} ${
                isDropdownOpen ? styles.rotate : ""
              }`}
            />
            {isDropdownOpen && (
              <ul
                className={`${styles.dropdown_menu} ${
                  isDropdownOpen ? styles.open : ""
                }`}
              >
                {genres.map((genre) => (
                  <li key={genre} onClick={() => handleGenreChange(genre)}>
                    {genre}
                  </li>
                ))}
              </ul>
            )}
          </button>
        </div>
        <SortBtn
          filtredMovies={filtredMovies}
          setFiltredMovies={setFiltredMovies}
        />
      </div>

      {filtredMovies.map((movie: ICinema) => (
        <div key={movie.imdbID} className={styles.card}>
          <img src={movie.Poster} className={styles.images} />
          <div className={styles.card_contnet}>
            <p className={styles.card_text}>{movie.Title}</p>

            <button className={styles.genre_btn}>{movie.Genre}</button>

            <div className={styles.raiting_body}>
              <img src="IMDB.svg" className={styles.img_imdb} />
              <p className={styles.raiting_text}>
                {movie.imdbRating} <img src="star-icon.svg" />
              </p>
            </div>

            <p className={styles.describe_text}>{movie.Plot}</p>
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
