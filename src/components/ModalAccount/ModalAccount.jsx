import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import ModalAccStyles from "../ModalAccount/ModalAccount.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const ModalAccount = ({ onClose, avatar, setAvatar }) => {
  const fileInputRef = useRef(null);

  const handleAvatarChange = async (event) => {
    const formData = new FormData();
    formData.append("avatar", event.target.files[0]);

    try {
      const response = await axios.post(
        "http://localhost:5000/upload-avatar",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setAvatar(response.data.filePath);
      onClose();
    } catch (error) {
      console.log("Error", error);
    }
  };

  const handleAvatarDel = async () => {
    try {
      await axios.delete("http://localhost:5000/upload-avatar", {
        data: { avatar },
      });
      setAvatar("profile.png");
      onclose();
    } catch (error) {
      console.error("Error del", error);
    }
  };

  const handleClickChange = () => {
    fileInputRef.current.click();
  };

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
    <>
      <div className={ModalAccStyles.acc_overlay}>
        <div className={ModalAccStyles.acc_wrapper}>
          <div className={ModalAccStyles.acc_header}>
            <button className={ModalAccStyles.close_btn} onClick={onClose}>
              <CloseIcon />
            </button>
            <p className={ModalAccStyles.acc_movieland}>MovieLand Account</p>
          </div>

          <div className={ModalAccStyles.acc_section}>
            <p className={ModalAccStyles.modal_title}>Profile photo</p>
            <p className={ModalAccStyles.modal_description}>
              Your profile photo will help other people recognize you, and will
              make it easier for you to determine which account you are logged
              into.
            </p>

            <div className={ModalAccStyles.avatar_flex}>
              <img
                src={avatar || "profile.png"}
                className={ModalAccStyles.avatar_image}
              />
            </div>
          </div>

          <div className={ModalAccStyles.action_section}>
            <button
              onClick={handleClickChange}
              className={ModalAccStyles.account_btn}
            >
              <EditIcon /> Change
            </button>
            <button
              className={ModalAccStyles.account_btn}
              onClick={handleAvatarDel}
            >
              <DeleteOutlineIcon /> Delete
            </button>
            <input
              className={ModalAccStyles.file_input}
              ref={fileInputRef}
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleAvatarChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalAccount;
