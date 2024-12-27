import React from "react";
import styles from "./BodyRegister.module.scss";

const BodyRegister = () => {
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

        <button className={styles.butLog} type="submit">
          <p className={styles.login}>Login</p>
        </button>
        <a href="" className={styles.userText}>New User? Register here</a>
      </form>
    </main>
  );
};

export default BodyRegister;
