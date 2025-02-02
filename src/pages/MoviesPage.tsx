import React from "react";
import Header from "../components/Header/Header";
import BodyMovies from "../components/BodyMovies/BodyMovies";

const MoviesPage = () => {
  return (
    <>
      <Header isSticky={false} />
      <BodyMovies />
    </>
  );
};

export default MoviesPage;
