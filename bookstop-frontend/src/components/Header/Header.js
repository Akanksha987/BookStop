import React, { useEffect, useState } from "react";
import About from "../../pages/About/About";
import Navbar from "../Navbar/Navbar";
import "./Header.css";
import axios from "axios";
let firstRender = true;
axios.defaults.withCredentials = true;
const Header = () => {
  const [user, setUser] = useState();

  const refreshToken = async () => {
    const res = await axios
      .get("https://localhost:8000/api/refresh", {
        withCredentials: true,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    return data;
  };
  const sendRequest = async () => {
    const res = await axios
      .get("http://localhost:8000/api/user", {
        withCredentials: true,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    if (firstRender) {
      firstRender = false;
      sendRequest().then((data) => setUser(data.user));
    }
    let interval = setInterval(() => {
      refreshToken().then((data) => setUser(data.user));
    }, 1000 * 29);

    return () => clearInterval(interval);
  }, []);
  return (
    <header className="header">
      <Navbar />
      <div className="header-content flex flex-c text-center text-black">
        <p className="header-text">
          "Welcome to "Bookstop" - Here you can find books and also contact your
          seniors"
          {user}
        </p>
      </div>
      <div className="about">
        <About />
      </div>
    </header>
  );
};

export default Header;
