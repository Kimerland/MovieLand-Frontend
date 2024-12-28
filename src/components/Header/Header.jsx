import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <p className={styles.title}>MovieLand</p>
        <div className={styles.rightSection}>
          <Link className={styles.films} to="/movies">
            All Films
          </Link>
          <button className={styles.butLog}>
            <Link className={styles.login} to="/">
              Login
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
