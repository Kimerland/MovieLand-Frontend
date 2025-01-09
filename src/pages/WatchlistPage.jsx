import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeMovie } from "../redux/favourites/favourites.slice";
import Header from "../components/Header/Header";
import styles from "./../components/BodyMovies/BodyMovies.module.scss";
import movies from "../components/BodyMovies/dataMovies";
import ViewDetails from "../components/ViewDetails/ViewDetails";

const WatchlistPage = () => {
  const favourites = useSelector((state) => state.favourites);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeMovie(id));
  };

  return (
    <>
      <Header />
      <main className={styles.main}>
        <p className={styles.my_watchlist}>My watchlist ({movies.length})</p>
        {favourites.length === 0 ? (
          <p className={styles.no_movie}>No movie!</p>
        ) : (
          <ul>
            {favourites.map((movie) => (
              <div key={movie.id} className={styles.card}>
                <img src={movie.poster} className={styles.images} />
                <div className={styles.card_contnet}>
                  <p className={styles.card_text}>{movie.title}</p>
                  <button className={styles.genre_btn}>{movie.genre}</button>

                  <div className={styles.raiting_body}>
                    <img src="IMDB.svg" />
                    <p className={styles.raiting_text}>
                      {movie.rating} <img src="star-icon.svg" />
                    </p>
                  </div>

                  <p className={styles.describe_text}> {movie.description}</p>
                  <div className={styles.important_btns}>
                    <ViewDetails movie={movie} />
                    <button
                      className={styles.watchlist_btn}
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
    </>
  );
};

export default WatchlistPage;
