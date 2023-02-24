import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logoImg from "../../images/B.png";
import books from "../../images/cover.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
// import { FaAdn, FaBorderAll } from 'react-icons/fa';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);

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
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="book" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="about" className="nav-link">
                  about
                </Link>
              </li>
              <li className="nav-item">
                <Link to="cart" className="nav-link">
                  cart
                </Link>
              </li>
              <li>
                <button id="sell-button">
                  {/* class="fas fa-border-all" */}
                  <Link to="" className="sell-link">
                    Sell Book
                  </Link>
                </button>
              </li>
            </ul>
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
