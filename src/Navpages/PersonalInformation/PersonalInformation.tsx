import React from "react";
import PersonalStyles from "../PersonalInformation/PersonalInformation.module.scss";
import NavProfile from "../../components/NavProfile/NavProfile";
import Header from "../../components/Header/Header";

const PersonalInformation = () => {
  return (
    <>
      <Header isSticky={true} />
      <NavProfile />
      <div className={PersonalStyles.wrapper}>
        <div className={PersonalStyles.header}>
          <h1 className={PersonalStyles.header_title}>Personal information</h1>
          <p className={PersonalStyles.header_text}>
            Information about you and your settings in the services
          </p>
        </div>
      </div>
    </>
  );
};

export default PersonalInformation;
