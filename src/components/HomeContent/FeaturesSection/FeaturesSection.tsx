import React from "react";
import StyleContent from "../FeaturesSection/FeaturesSection.module.scss";
import ChairIcon from "@mui/icons-material/Chair";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import HighQualityIcon from "@mui/icons-material/HighQuality";
import SubtitlesIcon from "@mui/icons-material/Subtitles";
import TheatersIcon from "@mui/icons-material/Theaters";
import SliderHomeContent from "../../sliders/SliderHomeContent/SliderHomeContent";

const FeaturesSection = () => {
  return (
    <div className={StyleContent.container_large}>
      <div className={StyleContent.card_grid}>
        <div className={StyleContent.card}>
          <ChairIcon />
          <h3>Unlimited Movie Collection</h3>
          <p>
            Dive into an ever-growing library of movies from all genres. Whether
            you love action, drama, sci-fi, or indie films, we have something
            for everyone.
          </p>
        </div>
        <div className={StyleContent.card}>
          <LiveTvIcon />
          <h3>Personalized Recommendations</h3>
          <p>
            Our smart algorithm learns your tastes and suggests movies you'll
            love. No more endless scrolling—just pure cinematic joy!
          </p>
        </div>
        <div className={StyleContent.card}>
          <HighQualityIcon />
          <h3>Watch Anytime, Anywhere</h3>
          <p>
            Enjoy seamless streaming on any device. Whether you're at home, on
            the go, or traveling, your favorite movies are always with you.
          </p>
        </div>

        <SliderHomeContent />

        <div className={StyleContent.bottom_card}>
          <div className={StyleContent.card}>
            <SubtitlesIcon />
            <h3>Exclusive Content & Early Access</h3>
            <p>
              Get access to exclusive releases, behind-the-scenes footage, and
              early premieres before anyone else.
            </p>
          </div>
          <div className={StyleContent.card}>
            <TheatersIcon />
            <h3>Ad-Free Experience</h3>
            <p>
              Say goodbye to annoying ads and interruptions. Immerse yourself in
              movies without distractions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
