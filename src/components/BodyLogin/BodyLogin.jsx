import React, { useState, useEffect } from "react";
import styles from "./BodyLogin.module.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const BodyLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/profile");
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        alert("Successful login!");
        navigate("/profile");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      if (error.response) {
        alert(error.response.data.message || "Error! Please try again.");
      } else {
        alert("Error! Please try again.");
      }
    }
  };

  return (
    <main className={styles.main}>
      <form className={styles.form} onSubmit={handleLogin}>
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
            type="text"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </label>

        <button className={styles.butLog} type="submit">
          <p className={styles.login}>Login</p>
        </button>
        <p href="" className={styles.userText}>
          New User?{" "}
          <Link className={styles.registerText} to="/registration">
            Register here
          </Link>
        </p>
      </form>
    </main>
  );
};

export default BodyLogin;
