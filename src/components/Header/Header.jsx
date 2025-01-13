import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header = ({ isSticky }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    setCurrentUser(user);
  }, []);

  return (
    <header className={`${styles.header} ${isSticky ? styles.sticky : ""}`}>
      <div className={styles.wrapper}>
        <p className={styles.title}>MovieLand</p>
        <div className={styles.rightSection}>
          <Link className={styles.films} to="/movies">
            All Films
          </Link>
          {currentUser ? (
            <div className={styles.header_container}>
              <Link className={styles.link_style} to="/watchlist">
                <p className={styles.watchlist_profile}>MY Watchlists</p>
              </Link>
              <Link to="/profile">
                <img className={styles.profile} src="/profile.png" />
              </Link>
            </div>
          ) : (
            <button className={styles.butLog}>
              <Link className={styles.login} to="/">
                Login
              </Link>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
