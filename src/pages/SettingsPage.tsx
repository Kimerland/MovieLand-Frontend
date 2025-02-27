import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import StyleContent from "../components/HomeContent/HomeContent.module.scss";
import SettingsContent from "../components/SettingsContent/SettingsContent";

const SettingsPage = () => {
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
        <SettingsContent />
      </div>
    </div>
  );
};

export default SettingsPage;
