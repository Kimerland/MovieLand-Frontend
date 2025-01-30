import React from "react";
import styles from "../WatchlistBtn/WatchlistBtn.module.scss";
import { useDispatch } from "react-redux";
import { addMovie } from "../../../redux/favourites/favourites.slice";

interface MovieType {
  id: number;
  title: string;
  rating: number;
}

interface WatchProps {
  movie: MovieType;
}

const WatchlistBtn: React.FC<WatchProps> = ({ movie }) => {
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
