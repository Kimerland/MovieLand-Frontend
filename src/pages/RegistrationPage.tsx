import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import BodyRegistration from "../components/BodyRegistration/BodyRegistration";
import StyleContent from "../components/HomeContent/HomeContent.module.scss";

const RegistrationPage = () => {
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
        <BodyRegistration />
      </div>
    </div>
  );
};

export default RegistrationPage;
