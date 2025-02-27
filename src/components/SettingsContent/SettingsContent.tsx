import React, { useState, useEffect } from "react";
import StyleSettings from "../SettingsContent/SettingsContent.module.scss";
import axios from "axios";

const SettingsContent = () => {
  const [user, setUser] = useState<{
    username: string;
    email: string;
    avatarUrl: string;
  } | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const response = await axios.get("http://localhost:5000/api/user", {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log("User data:", response.data.user);
        setUser(response.data.user);
      } catch (error) {
        console.error("Undefined user", error);
        localStorage.removeItem("token");
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className={StyleSettings.settings_wrapper}>
      {user ? (
        <div className={StyleSettings.settings_container}>
          <p className={StyleSettings.settings_text}>Account Management</p>
          <div className={StyleSettings.settings_block}>
            <img
              className={`${StyleSettings.settings_avatar} ${StyleSettings.settings_avatar}`}
              src={user.avatarUrl || "/profile.png"}
              alt="User avatar"
            />
            <p className={StyleSettings.user_text}>{user.username}</p>
            <p className={StyleSettings.email_text}>{user.email}</p>
          </div>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default SettingsContent;
