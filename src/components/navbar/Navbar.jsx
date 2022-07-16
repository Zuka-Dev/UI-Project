import React, { useState } from "react";
import "./navbar.css";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#wmzt2">What Is mZT-2</a>
    </p>
    <p>
      <a href="#possibility">Open AI</a>
    </p>
    <p>
      <a href="#features">Case Studies</a>
    </p>
    <p>
      <a href="#blog">Library</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="mzt2-navbar">
      <div className="mzt2-navbar-links">
        <div className="mzt2-navbar-links-logo">
          <h3 className="logo-font">mTZ-2</h3>
        </div>
        <div className="mzt2-navbar-links-container">
          <Menu />
        </div>
      </div>
      <div className="mzt2-navbar-sign">
        <p>Sign In</p>
        <button>Sign Up</button>
      </div>
      <div className="mzt2-navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="mzt2-navbar-menu-container scale-up-center">
            <div className="mzt2-navbar-menu-container-links">
              <Menu />
              <div className="mzt2-navbar-menu-container-links-sign">
                <p>Sign In</p>
                <button>Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
