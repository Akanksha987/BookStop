import React from "react";
import About from "../../pages/About/About";
import Navbar from "../Navbar/Navbar";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <Navbar />
      <div className="header-content flex flex-c text-center text-black">
        <p className="header-text">
          "Welcome to "Bookstop" - Here you can find books and also contact your
          seniors"
        </p>
      </div>
      <div className="about">
        <About />
      </div>
    </header>
  );
};

export default Header;
