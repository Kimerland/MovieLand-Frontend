import React from "react";
import WatchFilms from "../components/CinemaContent/WatchFilms/WatchFilms";
import Header from "../components/Header/Header";

const WatchFilmsPage = () => {
  return (
    <>
      <Header isSticky={false} />
      <WatchFilms />
    </>
  );
};

export default WatchFilmsPage;
