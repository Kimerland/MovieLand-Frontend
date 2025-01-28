import React from "react";
import Header from "../components/Header/Header";
import SliderHome from "../components/sliders/SliderHome/SliderHome";
import HomeContent from "../components/HomeContent/HomeContent";

const HomePage = () => {
  return (
    <>
      <Header isSticky={true} />
      <SliderHome />
      <HomeContent />
    </>
  );
};

export default HomePage;
