import React, { useEffect } from "react";
import StyleContent from "../HomeContent/HomeContent.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

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
      <div className={StyleContent.home_text}>
        {/* Picture for style */}
        <div className={StyleContent.background_div}>
          <img
            src={`http://localhost:5000/api/images/people.jpg`}
            className={StyleContent.background_image}
          />
        </div>

        <h2 className={StyleContent.home_h2}>Discover the Magic of Cinema</h2>
        <p className={StyleContent.home_block_text}>
          Step into the world of storytelling, where every frame tells a tale.
          Whether it's the pulse-pounding action, heartwarming drama, or
          mind-bending sci-fi, movies have a way of capturing emotions and
          imagination like nothing else.
        </p>
        <button className={StyleContent.home_join_btn}>
          <Link className={StyleContent.home_join} to="/registration">
            JOIN
          </Link>
        </button>
      </div>
      <div className={StyleContent.information_block}>
        <div className={StyleContent.top_block}>
          <img
            src={`http://localhost:5000/api/images/watching.png`}
            className={StyleContent.background_image}
          />
        </div>

        <div className={StyleContent.bottom_block}>
          <img
            src={`http://localhost:5000/api/images/1984-Movies.jpg`}
            className={StyleContent.background_image}
          />
        </div>
      </div>

      <div className={StyleContent.text_align_center}>
        <p className={StyleContent.our_text}>
          Why you should use only MovieLand?
        </p>
        <p className={StyleContent.beyond_text}>
          From watcher to expert and beyond...
        </p>
      </div>
    </div>
  );
};

export default HomeContent;
