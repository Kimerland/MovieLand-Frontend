import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  initialWatch,
  removeMovie,
} from "../../redux/favourites/favourites.slice";
import styles from "../../components/BodyMovies/BodyMovies.module.scss";
import WatchTrailerBtn from "../Buttons/WatchTrailerBtn/WatchTrailerBtn";
import { ICinema } from "../CinemaContent/CinemaContent";

export interface IWatch {
  state?: () => void;
  favourites: ICinema[];
}

const WatchlistContent = () => {
  const favourites = useSelector((state: IWatch) => state.favourites);
  console.log("Current favourites:", favourites);

  const dispatch = useDispatch();

  const handleRemove = (id: string) => {
    dispatch(removeMovie(id));
  };

  useEffect(() => {
    const watchList: ICinema[] = JSON.parse(
      localStorage.getItem("watchusers") || "[]"
    );
    if (watchList.length > 0) {
      dispatch(initialWatch(watchList));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("watchusers", JSON.stringify(favourites));
    console.log("Saving to localStorage:", favourites);
  }, [favourites]);

  return (
    <main className={styles.main}>
      <p className={styles.my_watchlist}>My watchlist ({favourites.length})</p>
      {favourites.length === 0 ? (
        <p className={styles.no_movie}>No movie!</p>
      ) : (
        <ul>
          {favourites.map((movie) => (
            <div key={movie.id} className={styles.card}>
              <img src={movie.Poster} className={styles.images} />
              <div className={styles.card_contnet}>
                <p className={styles.card_text}>{movie.Title}</p>
                <button className={styles.genre_btn}>{movie.Genre}</button>

                <div className={styles.raiting_body}>
                  <img src="IMDB.svg" />
                  <p className={styles.raiting_text}>
                    {movie.imdbRating} <img src="star-icon.svg" />
                  </p>
                </div>

                <p className={styles.describe_text}> {movie.Plot}</p>
                <div className={styles.important_btns}>
                  <WatchTrailerBtn movie={movie} />
                  <button
                    className={styles.remove_btn}
                    onClick={() => handleRemove(movie.id)}
                  >
                    Remove From Watchlists
                  </button>
                </div>
              </div>
            </div>
          ))}
        </ul>
      )}
    </main>
  );
};

export default WatchlistContent;
