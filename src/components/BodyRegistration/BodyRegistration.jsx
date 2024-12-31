import React, { useState } from "react";
import styles from "./BodyRegistration.module.scss";
import { Link, useNavigate } from "react-router-dom";

const BodyRegistration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const handleRegistration = (e) => {
    e.preventDefault();

    const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailCheck.test(email)) {
      alert("Invalid email!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Mistake in pass!");
      return;
    }

    const userFind = users.some((user) => user.email === email);

    if (userFind) {
      alert("We have this user!");
      return;
    }

    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Complete!");

    navigate("/movies");
  };

  return (
    <main className={styles.main}>
      <form className={styles.form} onSubmit={handleRegistration}>
        <p className={styles.title}>MovieLand</p>

        <label>
          <p className={styles.email}>Email</p>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          <p className={styles.password}>Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <label>
          <p className={styles.password}>Confirm Password</p>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>

        <button className={styles.butLog} type="submit">
          <p className={styles.login}>Signup</p>
        </button>
        <p href="" className={styles.userText}>
          Registered User?
          <Link className={styles.registerText} to="/">
            Login here
          </Link>
        </p>
      </form>
    </main>
  );
};

export default BodyRegistration;
