import React from "react";
import SecurityStyles from "../Security/Security.module.scss";
import NavProfile from "../../components/NavProfile/NavProfile";
import Header from "../../components/Header/Header";

const Security = () => {
  return (
    <>
      <Header isSticky={true} />
      <NavProfile />
      <div className={SecurityStyles.wrapper}>
        <div className={SecurityStyles.header}>
          <h1 className={SecurityStyles.privacy_title}>Safety</h1>
          <p className={SecurityStyles.privacy_text}>
            Settings and recommendations to help protect your account.
          </p>
        </div>
      </div>
    </>
  );
};

export default Security;
