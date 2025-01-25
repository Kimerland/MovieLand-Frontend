import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import axios from "axios";

interface User {
  email: string;
}

interface HeaderProps {
  isSticky: boolean;
}

const Header: React.FC<HeaderProps> = ({ isSticky }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const userData = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const server = await axios.get("http://localhost:5000/api/user", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setCurrentUser(server.data.user);
        } catch (error) {
          console.error("Undefined user", error);

          localStorage.removeItem("token");
        }
      }
    };

    userData();
  }, []);

  //add handleLogOut for profile page

  const handleLogOut = () => {
    localStorage.removeItem("token");
    setCurrentUser(null);
  };

  return (
    <header className={`${styles.header} ${isSticky ? styles.sticky : ""}`}>
      <div className={styles.wrapper}>
        <Link className={styles.title} to="/">
          MovieLand
        </Link>
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
              <Link className={styles.login} to="/login">
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
