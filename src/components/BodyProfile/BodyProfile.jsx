import React from "react";
import ProfileStyle from "../BodyProfile/BodyProfile.module.scss";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BadgeIcon from "@mui/icons-material/Badge";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import HttpsIcon from "@mui/icons-material/Https";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PaymentIcon from "@mui/icons-material/Payment";
import { Link } from "react-router-dom";
import SearchBtn from "../SearchBtn/SearchBtn";

const BodyProfile = () => {
  return (
    <div className={ProfileStyle.page_profile}>
      {/* Nav */}
      <nav className={ProfileStyle.nav_profile}>
        <ul>
          <li className={ProfileStyle.nav_item}>
            <div className={ProfileStyle.nav_icon}>
              <AccountCircleIcon />
              <Link to="/profile" className={ProfileStyle.home_text}>
                Home
              </Link>
            </div>
          </li>

          <li className={ProfileStyle.nav_item}>
            <div className={ProfileStyle.nav_icon}>
              <BadgeIcon />
              <Link
                to="/PersonalInformation"
                className={ProfileStyle.home_text}
              >
                Personal information
              </Link>
            </div>
          </li>

          <li className={ProfileStyle.nav_item}>
            <div className={ProfileStyle.nav_icon}>
              <ToggleOnIcon />
              <Link to="/data" className={ProfileStyle.home_text}>
                Data and Privacy
              </Link>
            </div>
          </li>

          <li className={ProfileStyle.nav_item}>
            <div className={ProfileStyle.nav_icon}>
              <HttpsIcon />
              <Link to="/security" className={ProfileStyle.home_text}>
                Security
              </Link>
            </div>
          </li>

          <li className={ProfileStyle.nav_item}>
            <div className={ProfileStyle.nav_icon}>
              <PeopleAltIcon />
              <Link to="/AccessSettings" className={ProfileStyle.home_text}>
                Access Settings
              </Link>
            </div>
          </li>

          <li className={ProfileStyle.nav_item}>
            <div className={ProfileStyle.nav_icon}>
              <PaymentIcon />
              <Link to="/payments" className={ProfileStyle.home_text}>
                Payments and Subscriptions
              </Link>
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
        <SearchBtn />

        <section className={ProfileStyle.profile_cards}>
          <div className={ProfileStyle.profile_card}>
            <div className={ProfileStyle.profile_card_content}>
              <p>Privacy and personalization</p>
              <p>Find out what data is stored in your account.</p>
            </div>
            <Link>Manage your data</Link>
          </div>

          <div className={ProfileStyle.profile_card}>
            <div className={ProfileStyle.profile_card_content}>
              <p>Recommendations for protection</p>
              <p>Make sure your account is secure.</p>
            </div>
            <Link>Protect your account</Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BodyProfile;
