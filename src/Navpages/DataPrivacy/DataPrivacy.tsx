import React from "react";
import PrivacyStyles from "../DataPrivacy/DataPrivacy.module.scss";
import NavProfile from "../../components/NavProfile/NavProfile";
import Header from "../../components/Header/Header";

const DataPrivacy = () => {
  return (
    <>
      <Header isSticky={true} />
      <NavProfile />
      <div className={PrivacyStyles.wrapper}>
        <div className={PrivacyStyles.header}>
          <h1 className={PrivacyStyles.privacy_title}>Data and privacy</h1>
          <p className={PrivacyStyles.privacy_text}>
            Basic privacy settings that let you choose what data is saved in
            your account, what ads you see, what information about you is
            available to other users, and other settings.
          </p>
        </div>
      </div>
    </>
  );
};

export default DataPrivacy;
