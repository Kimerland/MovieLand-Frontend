import React from "react";
import ProfileStyle from "../BodyProfile/BodyProfile.module.scss";
import { Link } from "react-router-dom";
import SearchBtn from "../Buttons/SearchBtn/SearchBtn";
import HeaderProfile from "../HeaderProfile/HeaderProfile";
import NavProfile from "../NavProfile/NavProfile";

const BodyProfile = () => {
  return (
    <div className={ProfileStyle.page_profile}>
      {/* Nav */}
      <NavProfile />

      {/* Header */}
      <HeaderProfile />

      <main className={ProfileStyle.main_content_profile}>
        <SearchBtn />

        <section className={ProfileStyle.profile_cards}>
          <div className={ProfileStyle.profile_card}>
            <div className={ProfileStyle.profile_card_content}>
              <h2 className={ProfileStyle.card_text}>
                Privacy and personalization your account
              </h2>
              <div className={ProfileStyle.card_description}>
                Find out what data is stored in your account.
              </div>
            </div>
            <Link className={ProfileStyle.card_link} to="/data">
              <p className={ProfileStyle.text_link}>Manage your data</p>
            </Link>
          </div>

          <div className={ProfileStyle.profile_card}>
            <div className={ProfileStyle.profile_card_content}>
              <h2 className={ProfileStyle.card_text}>
                Recommendations for protection
              </h2>
              <div className={ProfileStyle.card_description}>
                Make sure your account is secure.
              </div>
            </div>
            <Link className={ProfileStyle.card_link} to="/security">
              <p className={ProfileStyle.text_link}>Protect your account</p>
            </Link>
          </div>
        </section>

        <div
          className={`${ProfileStyle.profile_card} ${ProfileStyle.profile_card_large}`}
        >
          <div className={ProfileStyle.profile_card_content}>
            <h2 className={ProfileStyle.card_text}>
              Privacy guidelines are available
            </h2>
            <div className={ProfileStyle.card_description}>
              This step-by-step guide will help you choose the best privacy
              settings.
            </div>
          </div>
          <Link className={ProfileStyle.card_link} to="/data">
            View recommendations (3)
          </Link>
        </div>
      </main>
    </div>
  );
};

export default BodyProfile;
