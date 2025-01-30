import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import ModalAccStyles from "../ModalAccount/ModalAccount.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import PublicIcon from "@mui/icons-material/Public";
import { Link } from "react-router-dom";

const ModalAccount = ({ onClose, avatar, setAvatar }) => {
  const fileInputRef = useRef(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const server = await axios.get("http://localhost:5000/api/user", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(server.data.user);

          if (server.data.user.avatar) {
            setAvatar(server.data.user.avatar);
          }
        } catch (error) {
          console.error("Undefined upload avatar", error);
        }
      }
    };

    userData();
  }, [setAvatar]);

  const handleClickChange = () => {
    fileInputRef.current.click();
  };

  const handleAvatarChange = async (event) => {
    const file = event.target.files[0];
    if (file.size > 5 * 1024 * 1024) {
      alert("Maximum size is 5MB");
      return;
    }

    const formData = new FormData();
    formData.append("avatar", file);

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `http://localhost:5000/api/upload-avatar`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setAvatar(response.data.avatar);
      onClose();
    } catch (error) {
      console.error("Error uploading avatar:", error);
      alert("Failed to upload avatar");
    }
  };

  //esc function
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
  }, [handleEscape]);

  const handleAvatarDel = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.delete(`http://localhost:5000/api/avatar`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setAvatar(response.data.avatar);
      onClose();
    } catch (error) {
      console.error("Error deleting avatar:", error);
      alert("Failed to delete avatar");
    }
  };

  if (!user) {
    return null;
  }

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
                src={avatar ? `http://localhost:5000${avatar}` : "profile.png"}
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
              onClick={() => handleAvatarDel()}
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
