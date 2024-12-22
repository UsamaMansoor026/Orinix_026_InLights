import React, { useState } from "react";
import Logo from "./Logo";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Header = () => {
  const [showMobNav, setShowMobNav] = useState(false);
  return (
    <header className="relative">
      {/* Logo */}
      <Logo />

      {/* Links */}
      <ul className={`links ${showMobNav ? "mobnav" : ""}`}>
        <li>
          <a href="#" className="active">
            Homepage
          </a>
        </li>
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#">Use Cases</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
      </ul>

      {/* Call to action button */}
      <div className="flex_row_center gap-20">
        <button type="button">Join The waitlist</button>
        {/* Hamburger Menu */}
        <div
          className="hambugerMenu"
          onClick={() => setShowMobNav(!showMobNav)}
        >
          <span>{showMobNav ? <IoMdClose /> : <IoMdMenu />}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
