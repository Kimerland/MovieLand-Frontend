import React, { useState } from "react";
import styles from "../../BodyMovies/BodyMovies.module.scss";

interface MovieType {
  id: number;
  title: string;
  movie: [];
  rating: number;
}

interface FileredProps {
  filtredMovies: MovieType[];
  setFiltredMovies: React.Dispatch<React.SetStateAction<MovieType[]>>;
}

const SortBtn: React.FC<FileredProps> = ({
  filtredMovies,
  setFiltredMovies,
}) => {
  const [isAscending, setIsAscending] = useState(true);

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
