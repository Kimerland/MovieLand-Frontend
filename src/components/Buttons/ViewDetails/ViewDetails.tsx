import React, { useState } from "react";
import { createPortal } from "react-dom";
import styles from "../ViewDetails/ViewDetails.module.scss";
import Modal from "../../Modal/Modal";

interface MovieType {
  title: string;
  poster: string;
  information: string;
  director: string;
  releaseDate: string;
}

interface MovieProps {
  onClose: () => void;
  movie: MovieType;
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
