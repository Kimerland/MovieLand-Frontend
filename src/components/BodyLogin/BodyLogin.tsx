import React, { useState, useEffect, FormEvent } from "react";
import styles from "./BodyLogin.module.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

interface LoginRespons {
  token: string;
  message: string;
}

const BodyLogin = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    const token: string | null = localStorage.getItem("token");
    if (token) {
      navigate("/movies");
    }
  }, []);

  const handleLogin = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    try {
      const response = await axios.post<LoginRespons>(
        "http://localhost:5000/api/login",
        {
          email,
          password,
        }
      );

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        alert("Successful login!");
        navigate("/movies");
      } else {
        alert(response.data.message);
      }
    } catch (error: any) {
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
        <p className={styles.userText}>
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
