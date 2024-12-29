import React from "react";
import Header from "../components/Header/Header";
import BodyMovies from "../components/BodyMovies/BodyMovies";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const MoviesPage = () => {
  return (
    <>
      <Header />
      <BodyMovies />
    </>
  );
};

export default MoviesPage;
