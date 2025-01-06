import React from "react";
import styles from "../BodyMovies/BodyMovies.module.scss";
import { useDispatch } from "react-redux";
import { addMovie } from "../../redux/favourites/favourites.slice";

const WatchlistBtn = ({ movie }) => {
  const dispatch = useDispatch();

  const handleAddToWatchlist = () => {
    dispatch(addMovie(movie));
  };

  return (
    <button onClick={handleAddToWatchlist} className={styles.watchlist_btn}>
      Add to Watchlists
    </button>
  );
};

export default WatchlistBtn;
