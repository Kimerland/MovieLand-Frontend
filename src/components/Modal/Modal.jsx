import React, { useEffect } from "react";
import ModalStyles from "../Modal/Modal.module.scss";
import WatchTrailerBtn from "../WatchTrailerBtn/WatchTrailerBtn";

const Modal = ({ onClose, movie }) => {
  const handleEscape = (e) => {
    if (e.key === "Escape") {
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
    <div className={ModalStyles.modal_wrapper}>
      <div className={ModalStyles.modal_container}>
        <button className={ModalStyles.close_btn} onClick={onClose}>
          ESC
        </button>
        <p className={ModalStyles.about_title}>About {movie.title}</p>

        <div className={ModalStyles.content}>
          <div className={ModalStyles.img_content}>
            <img src={movie.poster} className={ModalStyles.poster_images} />
            <p className={ModalStyles.information_text}>{movie.information}</p>
          </div>

          <div className={ModalStyles.describe}>
            <p>{movie.director}</p>
            <p>{movie.releaseDate}</p>
          </div>

          <WatchTrailerBtn movie={movie} />
        </div>
      </div>
    </div>
  );
};
export default Modal;
