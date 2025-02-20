import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ICinema } from "../CinemaContent";

const WatchFilms = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<ICinema | null>(null);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?i=${id}&apikey=1af1e3f2`)
      .then((req) => req.json())
      .then((data) => setMovie(data));
  }, [id]);

  return (
    <div>
      {movie ? (
        <>
          <p>{movie.Title}</p>
          <img src={movie.Poster} alt={movie.Title} />
          <p>{movie.imdbRating}</p>
          <p>{movie.Year}</p>
          <p>{movie.Plot}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WatchFilms;
