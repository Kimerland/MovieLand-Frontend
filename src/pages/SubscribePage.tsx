import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import SubscribeContent from "../components/SubscribeContent/SubscribeContent";
import SubscribeStyles from "../components/SubscribeContent/SubscribeContent.module.scss";
import { subscriptions } from "../components/SubscribeContent/SubscribeData";
import StyleContent from "../components/HomeContent/HomeContent.module.scss";

const SubscribePage = () => {
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

        <div className={SubscribeStyles.main_subscriptions}>
          {subscriptions.map((sub, index) => (
            <SubscribeContent key={index} {...sub} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubscribePage;
