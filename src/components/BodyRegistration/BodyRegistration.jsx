import React, { useState } from "react";
import styles from "./BodyRegistration.module.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const BodyRegistration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegistration = async (e) => {
    e.preventDefault();

    const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailCheck.test(email)) {
      alert("Invalid email!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/register", {
        email,
        password,
      });

      if (response.status === 201) {
        alert("Registration successful! Please login.");
        navigate("/login");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      if (error.response) {
        alert(
          error.response.data.message || "An error occurred. Please try again."
        );
      } else {
        alert("An error occurred. Please try again.");
      }
    }
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
          <Link className={styles.registerText} to="/login">
            Login here
          </Link>
        </p>
      </form>
    </main>
  );
};

export default BodyRegistration;
