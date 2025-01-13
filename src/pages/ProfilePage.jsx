import React from "react";
import Header from "../components/Header/Header";
import BodyProfile from "../components/BodyProfile/BodyProfile";

const profilePage = () => {
  return (
    <>
      <Header isSticky={true} />
      <BodyProfile />
    </>
  );
};

export default profilePage;
