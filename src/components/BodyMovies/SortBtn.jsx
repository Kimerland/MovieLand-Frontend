import React, { useState } from "react";
import styles from "./BodyMovies.module.scss";

const SortBtn = () => {
  const [isAscending, setIsAscending] = useState(true);
  const [filtredMovies, setFiltredMovies] = useState([]);

  const handleSort = () => {
    const sortedMovies = [...filtredMovies].sort((a, b) => {
      return isAscending ? a.rating - b.rating : b.rating - a.rating;
    });
    setFiltredMovies(sortedMovies);
    setIsAscending(!isAscending);
  };

  return (
    <>
      <button className={styles.raiting_btn} onClick={handleSort}>
        Sort by IMDb
        <img
          src={isAscending ? "swap_vert_up.svg" : "swap_vert_down.svg"}
          className={styles.swap_vert}
        />
      </button>
    </>
  );
};

export default SortBtn;

// fix sort in the future.