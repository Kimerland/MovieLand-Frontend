import React, { useEffect, useState } from "react";
import StyleContent from "../HomeContent/HomeContent.module.scss";
import HeaderSection from "./HeaderSection/HeaderSection";
import InformationSection from "./InformationSection/InformationSection";
import FeaturesSection from "./FeaturesSection/FeaturesSection";
import LastSection from "./LastSection/LastSection";

const HomeContent = () => {
  return (
    <div className={StyleContent.home_main}>
      <HeaderSection />
      <InformationSection />
      <div className={StyleContent.text_align_center}>
        <p className={StyleContent.our_text}>
          Why you should use only MovieLand?
        </p>
        <p className={StyleContent.beyond_text}>
          From watcher to expert and beyond...
        </p>
      </div>
      <FeaturesSection />
      <LastSection />
    </div>
  );
};

export default HomeContent;
