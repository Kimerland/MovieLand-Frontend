import React from "react";
import StyleContent from "../LastSection/LastSection.module.scss";

const LastSection = () => {
  return (
    <div className={StyleContent.last_block}>
      <div className={StyleContent.blur_background}></div>
      <p className={StyleContent.last_text}>The latest</p>
      <p className={StyleContent.large_last_text}>
        Buy a subscription! Only $4.49 for you.
      </p>
    </div>
  );
};

export default LastSection;
