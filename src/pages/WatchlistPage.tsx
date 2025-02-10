import React, { useEffect, useState } from "react";
import StyleContent from "../components/HomeContent/HomeContent.module.scss";
import Header from "../components/Header/Header";
import WatchlistContent from "../components/WatchlistContent/WatchlistContent";

const WatchlistPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, []);

  return (
    <div className={StyleContent.home_wrapper}>
      <div className={StyleContent.grain_overlay}></div>
      <div
        className={`${StyleContent.home_page} ${
          isVisible ? StyleContent.active : ""
        }`}
      >
        <Header isSticky={false} />
        <WatchlistContent />
      </div>
    </div>
  );
};

export default WatchlistPage;
