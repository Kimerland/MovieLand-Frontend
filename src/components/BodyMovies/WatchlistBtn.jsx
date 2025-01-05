import React from "react";
import styles from "./BodyMovies.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../redux/favourites/favourites.slice";

const WatchlistBtn = ({ recipe }) => {
  const { favourites } = useSelector((state) => state);

  const dispatch = useDispatch();

  console.log(favourites);
  return (
    <button
      onClick={() => dispatch(actions.toogleFavourites(recipe))}
      className={styles.watchlist_btn}
    >
      Add to Watchlists
    </button>
  );
};

export default WatchlistBtn;
