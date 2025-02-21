import React, { useEffect, useState } from "react";
import StyleContent from "../components/HomeContent/HomeContent.module.scss";
import WatchFilms from "../components/CinemaContent/WatchFilms/WatchFilms";
import Header from "../components/Header/Header";

const WatchFilmsPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, []);
  return (
    <div className={StyleContent.home_wrapper}>
      <div
        className={`${StyleContent.home_page} ${
          isVisible ? StyleContent.active : ""
        }`}
      >
        <Header isSticky={false} />
        <WatchFilms />
      </div>
    </div>
  );
};

export default WatchFilmsPage;
