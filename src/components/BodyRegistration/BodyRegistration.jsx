import React, { useState } from "react";
import styles from "./BodyRegistration.module.scss";
import { Link, useNavigate } from "react-router-dom";

const BodyRegistration = () => {
  return (
    <main className={styles.main}>
      <form className={styles.form}>
        <p className={styles.title}>MovieLand</p>

        <label>
          <p className={styles.email}>Email</p>
          <input type="text" />
        </label>

        <label>
          <p className={styles.password}>Password</p>
          <input type="text" />
        </label>

        <label>
          <p className={styles.password}>Confirm Password</p>
          <input type="text" />
        </label>

        <button className={styles.butLog} type="submit">
          <p className={styles.login}>Signup</p>
        </button>
        <p href="" className={styles.userText}>
          Registered User?
          <Link className={styles.registerText} to="/">
            Login here
          </Link>
        </p>
      </form>
    </main>
  );
};

export default BodyRegistration;
