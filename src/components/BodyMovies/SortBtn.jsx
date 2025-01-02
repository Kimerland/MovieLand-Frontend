import React, { useState } from "react";
import styles from "./BodyMovies.module.scss";

const SortBtn = () => {
  const [isAscending, setIsAscending] = useState(true);
  const [filtredMovies, setFiltredMovies] = useState([]);

  const handleSort = () => {
    // function sorted
  };

  return (
    <button className={styles.raiting_btn} onClick={handleSort}>
      Sort by IMDb
      <img src="swap_vert.svg" className={styles.swap_vert} />
    </button>
  );
};

export default SortBtn;
