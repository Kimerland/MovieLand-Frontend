import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <p className={styles.title}>MovieLand</p>
        <div className={styles.rightSection}>
          <p className={styles.films}>All Films</p>
          <button className={styles.butLog}>
            <p className={styles.login}>Login</p>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
