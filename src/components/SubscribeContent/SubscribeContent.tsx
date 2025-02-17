import React, { FC, useState } from "react";
import SubscribeStyles from "../SubscribeContent/SubscribeContent.module.scss";
import { createPortal } from "react-dom";
import ModalSubscribe from "../Modal/ModalSubscribe/ModalSubscribe";

export interface SubscribeProps {
  title: string;
  oldPrice: number;
  newPrice: number;
  description: string;
  buttonText: string;
  imgSrc: string;
  onClose?: () => void;
}

const SubscribeContent: FC<SubscribeProps> = ({
  title,
  oldPrice,
  newPrice,
  description,
  buttonText,
  imgSrc,
}) => {
  const [showModal, setShowModal] = useState(false);
  const isSubscribed = Boolean(localStorage.getItem("subscription"));

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

      {!isSubscribed && (
        <button
          className={SubscribeStyles.subscribe_btn}
          onClick={() => setShowModal(true)}
        >
          {buttonText}
        </button>
      )}

      {showModal &&
        createPortal(
          <>
            <ModalSubscribe onClose={() => setShowModal(false)} />
          </>,
          document.body
        )}
    </div>
  );
};

export default SubscribeContent;
