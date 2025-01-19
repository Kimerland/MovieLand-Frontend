import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

interface User {
  user?: object;
}

interface HeaderProps {
  isSticky: boolean;
}

const Header: React.FC<HeaderProps> = ({ isSticky }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (user) {
      try {
        const parsedUser: User = JSON.parse(user);
        setCurrentUser(parsedUser);
      } catch (error) {
        console.log("Invalid user data in LocalStorage", error);
      }
    }
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
