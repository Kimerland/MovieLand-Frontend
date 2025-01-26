import React from "react";
import Header from "../components/Header/Header";
import BodyLogin from "../components/BodyLogin/BodyLogin.js"

const LoginPage = () => {
  return (
    <>
      <Header isSticky={false} />
      <BodyLogin/>
    </>
  );
};

export default LoginPage;
