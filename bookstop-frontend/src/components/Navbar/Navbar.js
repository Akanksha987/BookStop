import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logoImg from "../../images/B.png";
import books from "../../images/cover.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);
  const handleClick = (e) => {
    let buttons = document.getElementsByClassName("buttons");
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i].hasAttribute("id", "active")) {
        buttons[i].removeAttribute("id", "active");
      }
    }
    e.target.setAttribute("id", "active");
  };
  return (
    // Main divison of navabar
    <nav className="navbar_main" id="navbar">
      <div className=" navbar-content flex">
        <div className="brand-and-toggler flex flex-sb">
          {/* Back link on the logo to the home page */}
          <Link to="/" className="navbar-brand flex">
            <img src={logoImg} alt="site logo" className="logo" />
          </Link>

          {/* hamburger button for the scroll down menu - Mobile Version */}
          <button
            type="button"
            className="navbar-toggler-btn"
            onClick={handleNavbar}
          >
            <HiOutlineMenuAlt3
              size={35}
              style={{
                color: `${toggleMenu ? "#fff" : "#010101"}`,
              }}
            />
          </button>
        </div>

        {/* Division for the scroll menu displayed after clicking hanburger icon - Mobile Version */}
        <div
          className={
            toggleMenu
              ? "navbar-collapse show-navbar-collapse"
              : "navbar-collapse"
          }
        >
          <div className="floating-nav">
            <Link to="/">
              <button
                id="active"
                onClick={handleClick}
                className="navigate-around-buttons buttons"
              >
                Home
              </button>
            </Link>
            <Link to="/book">
              <button
                onClick={handleClick}
                className="navigate-around-buttons buttons"
              >
                Books
              </button>
            </Link>
            <Link to="/cart">
              <button
                onClick={handleClick}
                className="navigate-around-buttons buttons"
              >
                Cart
              </button>
            </Link>
            <Link to="/sell">
              <button className="navigate-around-buttons buttons">
                List Book
              </button>
            </Link>
            <Link to="/users/signup">
              <button
                onClick={handleClick}
                className="navigate-around-buttons buttons"
              >
                SignUp
              </button>
            </Link>
          </div>

          {/* Dision for image of books */}
          <div>
            <img id="image-div" src={books} alt="" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
