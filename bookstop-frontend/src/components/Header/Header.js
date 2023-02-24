import React from "react";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <Navbar />
      <div className="header-content flex flex-c text-center text-black">
        {/* <h2 className="header-title">Search Book Of Your Need.</h2>
        <br /> */}
        <p className="header-text">
          "Welcome to the "Bookstop" - Here you can find books and also conatct
          your seniors"
        </p>
        <SearchForm />
      </div>
    </header>
  );
};

export default Header;
