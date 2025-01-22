import React from "react";
import { Link } from "react-router-dom";
import ProfileStyle from "../NavProfile/NavProfile.module.scss";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BadgeIcon from "@mui/icons-material/Badge";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import HttpsIcon from "@mui/icons-material/Https";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PaymentIcon from "@mui/icons-material/Payment";

const NavProfile = () => {
  return (
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
            <Link to="/PersonalInformation" className={ProfileStyle.home_text}>
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
  );
};

export default NavProfile;
