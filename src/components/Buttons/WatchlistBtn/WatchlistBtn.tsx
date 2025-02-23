import React from "react";
import styles from "../WatchlistBtn/WatchlistBtn.module.scss";
import { useDispatch } from "react-redux";
import { addMovie } from "../../../redux/favourites/favourites.slice";
import { ICinema } from "../../CinemaContent/CinemaContent";

interface WatchProps {
  movie: ICinema;
}

const WatchlistBtn: React.FC<WatchProps> = ({ movie }) => {
  const dispatch = useDispatch();

  const handleAddToWatchlist = () => {
    console.log("Adding movie:", { ...movie, id: movie.imdbID });
    dispatch(addMovie({ ...movie, id: movie.imdbID }));
  };

  return (
    <button onClick={handleAddToWatchlist} className={styles.watchlist_btn}>
      Add to Watchlists
    </button>
  );
};

export default WatchlistBtn;
