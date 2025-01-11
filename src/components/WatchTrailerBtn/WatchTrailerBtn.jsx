import React from "react";
import TrailerStyles from "../WatchTrailerBtn/WatchTrailerBtn.module.scss";

const WatchTrailerBtn = ({ movie }) => {
  
  const openTrailer = () => {
    window.open(movie.trailer);
  };

  return (
    <button onClick={openTrailer} className={TrailerStyles.trailer_btn}>
      Watch Trailer
    </button>
  );
};

export default WatchTrailerBtn;
