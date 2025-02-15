import React, { FC, useEffect } from "react";
import ModalStyles from "../ModalSubscribe/ModalSubscribe.module.scss";

export interface SubscribeProps {
  onClose: () => void;
}

const ModalSubscribe: FC<SubscribeProps> = ({ onClose }) => {
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

  useEffect(() => {
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div className={ModalStyles.modal_overlay} onClick={handleOverlayClick}>
      <div className={ModalStyles.modal_content}>
        <button className={ModalStyles.close_btn} onClick={onClose}>
          ✖
        </button>
        <h2>Subscribe Now</h2>
        <p>Unlock premium features with our subscription.</p>
        <button className={ModalStyles.subscribe_btn}>Subscribe</button>
      </div>
    </div>
  );
};

export default ModalSubscribe;
