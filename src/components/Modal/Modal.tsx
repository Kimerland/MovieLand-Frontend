import React, { useEffect } from "react";
import ModalStyles from "../Modal/Modal.module.scss";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { ICinema } from "../CinemaContent/CinemaContent";

export interface ModalProps {
  onClose: () => void;
  movie: ICinema;
}

const Modal: React.FC<ModalProps> = ({ onClose, movie }) => {
  const handleEscape = (e: globalThis.KeyboardEvent) => {
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
          <ArrowDropDownIcon />
        </button>
        <p className={ModalStyles.about_title}>About Film</p>
        <div className={ModalStyles.content}>
          <div className={ModalStyles.img_content}>
            <img src={movie.Poster} className={ModalStyles.poster_images} />
            <p className={ModalStyles.information_text}>{movie.Plot}</p>
          </div>
          <div className={ModalStyles.describe}>
            <p>{movie.Year}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
