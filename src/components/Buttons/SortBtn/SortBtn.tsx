import React, { useState } from "react";
import styles from "../../BodyMovies/BodyMovies.module.scss";
import { ICinema } from "../../CinemaContent/CinemaContent";

interface FileredProps {
  filtredMovies: ICinema[];
  setFiltredMovies: React.Dispatch<React.SetStateAction<ICinema[]>>;
}

const SortBtn: React.FC<FileredProps> = ({
  filtredMovies,
  setFiltredMovies,
}) => {
  const [isAscending, setIsAscending] = useState(true);

  const handleSort = () => {
    const sortedMovies = [...filtredMovies].sort((a, b) => {
      return isAscending
        ? a.imdbRating - b.imdbRating
        : b.imdbRating - a.imdbRating;
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
