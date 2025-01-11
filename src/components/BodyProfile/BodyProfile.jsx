import React from "react";
import ProfileStyle from "../BodyProfile/BodyProfile.module.scss";

const BodyProfile = () => {
  return (
    <main className={ProfileStyle.main_profile}>
      <p className={ProfileStyle.text_profile}>Welcome, user!</p>
      <p className={ProfileStyle.customize_profile}>
        Customize your privacy and security settings to make your experience
        even better. Learn more…
      </p>
      <input type="text" className={ProfileStyle.customize_search} />
    </main>
  );
};

export default BodyProfile;
