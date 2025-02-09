import React, { FC, useEffect, useState } from "react";
import ProfileStyles from ".//ProfileStyles.module.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { ProfileMenuProps } from "../Header/Header";

const ProfileMenu: FC<ProfileMenuProps> = ({ setCurrentUser }) => {
  const [initialState, setInitialState] = useState<boolean>(false);
  const [user, setUser] = useState<{ email: string; avatarUrl: string }>({
    email: "",
    avatarUrl: "",
  });

  const toogleMenu = () => {
    setInitialState((prev) => !prev);
  };

  const handleLogOut = () => {
    localStorage.removeItem("token");
    setCurrentUser(null);
  };

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
          setUser(server.data.user);
        } catch (error) {
          console.error("Undefined user", error);

          localStorage.removeItem("token");
        }
      }
    };
    userData();
  }, []);

  return (
    <div
      className={ProfileStyles.profileContainer}
      onMouseLeave={() => setInitialState(false)}
    >
      {initialState === true ? (
        <div className={ProfileStyles.nav_menu}>
          <ul>
            <img
              className={`${ProfileStyles.profile} ${ProfileStyles.nav_avatar}`}
              src={user.avatarUrl || "/profile.png"}
            />
            <p className={ProfileStyles.email_text}>{user.email}</p>
            <hr />
            <Link to="/subscribe">Subscribe</Link>
            <Link to="/messages">Messages</Link>
            <hr />
            <Link to="/settings">Settings</Link>
            <Link to="/support">Support</Link>
            <hr />
            <button className={ProfileStyles.btn_logout} onClick={handleLogOut}>
              Log out
            </button>
          </ul>
        </div>
      ) : (
        <img
          className={ProfileStyles.profile}
          src={user.avatarUrl || "/profile.png"}
          onClick={toogleMenu}
        />
      )}
    </div>
  );
};

export default ProfileMenu;
