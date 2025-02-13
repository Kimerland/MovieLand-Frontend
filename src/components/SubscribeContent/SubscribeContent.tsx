import React, { FC } from "react";
import SubscribeStyles from "../SubscribeContent/SubscribeContent.module.scss";

interface SubscribeProps {
  title: string;
  oldPrice: number;
  newPrice: number;
  description: string;
  buttonText: string;
  imgSrc: string;
}

const SubscribeContent: FC<SubscribeProps> = ({
  title,
  oldPrice,
  newPrice,
  description,
  buttonText,
  imgSrc,
}) => {
  return (
    <div className={SubscribeStyles.subscription_card}>
      <img
        src={imgSrc}
        className={SubscribeStyles.background_image}
        alt={title}
      />
      <h2>{title}</h2>
      <p className={SubscribeStyles.price}>
        <s>${oldPrice}</s> Now ${newPrice}/month
      </p>
      <p className={SubscribeStyles.description}>{description}</p>
      <button className={SubscribeStyles.subscribe_btn}>{buttonText}</button>
    </div>
  );
};

export default SubscribeContent;
