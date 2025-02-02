import React from "react";
import Header from "../components/Header/Header";
import SliderHome from "../components/sliders/SliderHome/SliderHome";
import HomeContent from "../components/HomeContent/HomeContent";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <Header isSticky={true} />
      <SliderHome />
      <HomeContent />
      <Footer />
    </>
  );
};

export default HomePage;
