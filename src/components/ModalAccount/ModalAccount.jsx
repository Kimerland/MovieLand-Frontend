import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import ModalAccStyles from "../ModalAccount/ModalAccount.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import PublicIcon from "@mui/icons-material/Public";
import { Link } from "react-router-dom";

const ModalAccount = ({ onClose, avatar, setAvatar }) => {
  const userId = "123456";

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
      const userId = "id users";
      await axios.delete(`http://localhost:5000/upload-avatar/${userId}`);
      setAvatar("profile.png");
      onClose();
    } catch (error) {
      console.error("Error deleting avatar:", error);
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

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/user/${userId}`
        );
        setAvatar(response.data.avatar || "profile.png");
      } catch (error) {
        console.error("Error user data:", error);
      }
    };

    fetchUser();
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

            <div className={ModalAccStyles.acc_content}>
              <button className={ModalAccStyles.acc_agreement}>
                <PublicIcon className={ModalAccStyles.icon} />
                <span>The profile icon is visible to everyone</span>
              </button>
            </div>

            <div className={ModalAccStyles.birthday_card}>
              <div className={ModalAccStyles.birthday_card_content}>
                <p>Your birthday is coming soon</p>
                <p>
                  Allow others to see your birthday in your profile so they can
                  know about your upcoming celebration.
                </p>
                <Link className={ModalAccStyles.birthday_card_link}>
                  Change settings
                </Link>
              </div>
            </div>

            <div className={ModalAccStyles.avatar_flex}>
              <img
                src={`http://localhost:5000${avatar}` || "profile.png"}
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
