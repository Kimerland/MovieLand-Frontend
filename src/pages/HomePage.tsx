import React from "react";
import Header from "../components/Header/Header";
import SliderHome from "../components/sliders/SliderHome/SliderHome";

const HomePage = () => {
  return (
    <>
      <Header isSticky={true} />
      <SliderHome />
    </>
  );
};

export default HomePage;
