import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import SliderHome from "../components/sliders/SliderHome/SliderHome";
import HomeContent from "../components/HomeContent/HomeContent";
import Footer from "../components/Footer/Footer";
import StyleContent from "../components/HomeContent/HomeContent.module.scss";

const HomePage = () => {
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
        <Header isSticky={true} />
        <SliderHome />
        <HomeContent />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
