import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import BodyLogin from "../components/BodyLogin/BodyLogin.js";
import StyleContent from "../components/HomeContent/HomeContent.module.scss";

const LoginPage = () => {
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
        <BodyLogin />
      </div>
    </div>
  );
};

export default LoginPage;
