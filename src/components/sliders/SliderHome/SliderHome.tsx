import React, { useEffect, useState } from "react";
import StyleSlider from "../SliderHome/SliderHome.module.scss";
import { Link } from "react-router-dom";

type Image = string;

const SliderHome = () => {
  const [images, SetImages] = useState<Image[]>([]);

  const fetchPhotos = async (): Promise<void> => {
    try {
      const response = await fetch("http://localhost:5000/api/photos");
      const photos: Image[] = await response.json();
      SetImages(photos);
    } catch (error) {
      console.error("Error upload", error);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <div className={StyleSlider.start_header}>
      <p className={StyleSlider.start_title}>Discover Movies</p>
      <p className={StyleSlider.start_text}>
        Explore the latest and greatest films.
      </p>
      <button className={StyleSlider.start_btn}>
        <Link className={StyleSlider.start_btn_text} to="/registration">
          Get Started
        </Link>
      </button>
      <div className={StyleSlider.image_icons}>
        {images.map((image: Image, id: number) => (
          <img
            key={id}
            src={`http://localhost:5000/api/photos/${image}`}
            className={StyleSlider.start_pictures}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderHome;
