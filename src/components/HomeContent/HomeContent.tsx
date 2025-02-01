import React, { useEffect } from "react";
import StyleContent from "../HomeContent/HomeContent.module.scss";
import { useState } from "react";
import HeaderSection from "./HeaderSection/HeaderSection";
import InformationSection from "./InformationSection/InformationSection";
import FeaturesSection from "./FeaturesSection/FeaturesSection";
import LastSection from "./LastSection/LastSection";

type Image = string;

const HomeContent = () => {
  const [picture, setPicture] = useState<Image[]>([]);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async (): Promise<void> => {
    try {
      const response = await fetch(`http://localhost:5000/api/images`);
      const photos: string[] = await response.json();
      setPicture(photos);
    } catch (error) {
      console.error("Error photos:", error);
    }
  };

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
