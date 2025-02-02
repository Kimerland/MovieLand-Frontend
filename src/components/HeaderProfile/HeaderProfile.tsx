import React, { useState } from "react";
import HeaderStyle from "../HeaderProfile/HeaderProfile.module.scss";
import { createPortal } from "react-dom";
import ModalAccount from "../ModalAccount/ModalAccount";

const HeaderProfile: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [avatar, setAvatar] = useState<string>("profile.png");

  return (
    <header className={HeaderStyle.profile_header}>
      <div className={HeaderStyle.img_block}>
        <img
          onClick={() => setShowModal(true)}
          src="profile.png"
          className={HeaderStyle.profile_img}
        />
      </div>

      <p className={HeaderStyle.text_profile}>Welcome, user!</p>
      <p className={HeaderStyle.subtitle_profile}>
        Customize your privacy and security settings to make your experience
        even better. Learn more…
      </p>

      {showModal &&
        createPortal(
          <>
            <ModalAccount
              avatar={avatar}
              setAvatar={setAvatar}
              onClose={() => setShowModal(false)}
            />
          </>,
          document.body
        )}
    </header>
  );
};

export default HeaderProfile;
