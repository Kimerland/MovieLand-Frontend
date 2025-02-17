import React, { FC, useEffect, useState } from "react";
import ModalStyles from "../ModalSubscribe/ModalSubscribe.module.scss";

export interface SubscribeProps {
  onClose: () => void;
}

const ModalSubscribe: FC<SubscribeProps> = ({ onClose }) => {
  const [isSubscribed, setIsSubscribed] = useState(
    Boolean(localStorage.getItem("subscription"))
  );

  const handleEscape = (e: globalThis.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const buySubscribe = () => {
    localStorage.setItem("subscription", "true");
    setIsSubscribed(true);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  if (!isSubscribed) {
    setTimeout(() => {
      onClose();
    }, 10000);
  }

  return (
    <div className={ModalStyles.modal_overlay} onClick={handleOverlayClick}>
      <div className={ModalStyles.modal_content}>
        <button className={ModalStyles.close_btn} onClick={onClose}>
          ✖
        </button>
        <h2>Subscribe Now</h2>
        <p>Unlock premium features with our subscription.</p>
        {isSubscribed ? (
          <p>You are subscribed!</p>
        ) : (
          <button onClick={buySubscribe} className={ModalStyles.subscribe_btn}>
            Subscribe
          </button>
        )}
      </div>
    </div>
  );
};

export default ModalSubscribe;
