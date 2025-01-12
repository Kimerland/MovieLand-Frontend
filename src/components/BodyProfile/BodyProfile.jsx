import React from "react";
import ProfileStyle from "../BodyProfile/BodyProfile.module.scss";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BadgeIcon from "@mui/icons-material/Badge";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import HttpsIcon from "@mui/icons-material/Https";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PaymentIcon from "@mui/icons-material/Payment";

const BodyProfile = () => {
  return (
    <div className={ProfileStyle.page_profile}>
      {/* Nav */}
      <nav className={ProfileStyle.nav_profile}>
        <ul>
          <li className={ProfileStyle.nav_item}>
            <div className={ProfileStyle.nav_icon}>
              <AccountCircleIcon />
              <p className={ProfileStyle.home_text}>Home</p>
            </div>
          </li>

          <li className={ProfileStyle.nav_item}>
            <div className={ProfileStyle.nav_icon}>
              <BadgeIcon />
              <p className={ProfileStyle.home_text}>Personal information</p>
            </div>
          </li>

          <li className={ProfileStyle.nav_item}>
            <div className={ProfileStyle.nav_icon}>
              <ToggleOnIcon />
              <p className={ProfileStyle.home_text}>Data and Privacy</p>
            </div>
          </li>

          <li className={ProfileStyle.nav_item}>
            <div className={ProfileStyle.nav_icon}>
              <HttpsIcon />
              <p className={ProfileStyle.home_text}>Security</p>
            </div>
          </li>

          <li className={ProfileStyle.nav_item}>
            <div className={ProfileStyle.nav_icon}>
              <PeopleAltIcon />
              <p className={ProfileStyle.home_text}>Access Settings</p>
            </div>
          </li>

          <li className={ProfileStyle.nav_item}>
            <div className={ProfileStyle.nav_icon}>
              <PaymentIcon />
              <p className={ProfileStyle.home_text}>
                Payments and Subscriptions
              </p>
            </div>
          </li>
        </ul>
      </nav>

      {/* Header */}
      <header className={ProfileStyle.profile_header}>
        <div className={ProfileStyle.img_block}>
          <img src="profile.png" className={ProfileStyle.profile_img} />
        </div>

        <p className={ProfileStyle.text_profile}>Welcome, user!</p>
        <p className={ProfileStyle.subtitle_profile}>
          Customize your privacy and security settings to make your experience
          even better. Learn more…
        </p>
      </header>

      <main className={ProfileStyle.main_content_profile}>
        <div className={ProfileStyle.search_bar}>
          <input type="text" placeholder="Search in account" />
        </div>

        <section className={ProfileStyle.profile_cards}>
          <div className={ProfileStyle.profile_card}>
            <p>Privacy and personalization</p>
            <p>Find out what data is stored in your account.</p>
          </div>

          <div className={ProfileStyle.profile_card}>
            <p>Recommendations for protection</p>
            <p>Make sure your account is secure.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BodyProfile;
