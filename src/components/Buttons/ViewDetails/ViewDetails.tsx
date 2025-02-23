import React, { useState } from "react";
import { createPortal } from "react-dom";
import styles from "../ViewDetails/ViewDetails.module.scss";
import Modal from "../../Modal/Modal";
import { ICinema } from "../../CinemaContent/CinemaContent";

interface MovieProps {
  onClose?: () => void;
  movie: ICinema;
}

const ViewDetails: React.FC<MovieProps> = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setShowModal(true);
        }}
        className={styles.view_btn}
      >
        View Details
      </button>

      {showModal &&
        createPortal(
          <>
            <Modal movie={movie} onClose={() => setShowModal(false)} />
          </>,
          document.body
        )}
    </>
  );
};

export default ViewDetails;
