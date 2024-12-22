import React from "react";
import Logo from "./Logo";
/* Social Icons */
import Twitter from "../assets/Twitter.svg";
import Facebook from "../assets/Facebook.svg";
import Linkedin from "../assets/Linkedin.svg";

const Footer = () => {
  return (
    <footer>
      <Logo />

      {/* Main Container */}
      <div className="footerWrapper">
        {/* Social Icons */}
        <div className="socialLinks">
          <ul>
            <li>
              <img src={Twitter} alt="Twitter Icon" />
            </li>
            <li>
              <img src={Facebook} alt="Facebook Icon" />
            </li>
            <li>
              <img src={Linkedin} alt="Linkedin Icon" />
            </li>
          </ul>
          <p>&copy; 2024 Orinix Reserved</p>
        </div>

        {/* External Links */}
        <div className="externalLinksWrapper">
          {/* Products */}
          <ul>
            <li>
              <h4>Product</h4>
            </li>
            <li>
              <a href="#">Landingpage</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Documentation</a>
            </li>
            <li>
              <a href="#">Referral Program</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
          </ul>

          {/* Services */}
          <ul>
            <li>
              <h4>Services</h4>
            </li>
            <li>
              <a href="#">Documentation</a>
            </li>
            <li>
              <a href="#">Design</a>
            </li>
            <li>
              <a href="#">Themes</a>
            </li>
            <li>
              <a href="#">Illustrations</a>
            </li>
            <li>
              <a href="#">UI Kit</a>
            </li>
          </ul>

          {/* Company */}
          <ul>
            <li>
              <h4>Company</h4>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>

          {/* More */}
          <ul>
            <li>
              <h4>More</h4>
            </li>
            <li>
              <a href="#">Documentation</a>
            </li>
            <li>
              <a href="#">License</a>
            </li>
            <li>
              <a href="#">Changelog</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
