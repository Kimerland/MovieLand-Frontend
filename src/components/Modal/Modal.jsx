import React from "react";
import styles from "../Modal/Modal.module.scss";

const Modal = ({ onClose }) => {
  return (
    <div className={styles.modal_wrapper}>
      <div className={styles.modal_container}>
        <p>Loading...</p>
        <button onClick={onClose}>ESC</button>
      </div>
    </div>
  );
};
export default Modal;
