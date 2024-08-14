import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="content">
          <div className="top">
            <div className="logo-details">
              <span className="logo_name">Refresh</span>
            </div>
          </div>
          <div className="link-boxes">
            <ul className="box">
              <li className="link_name">Company</li>
              <li>
                <a href="link">Home</a>
              </li>
              <li>
                <a href="link">Contact</a>
              </li>
              <li>
                <a href="link">About Privacy</a>
              </li>
              <li>
                <a href="link">Login</a>
              </li>
              <li>
                <a href="link">Signup</a>
              </li>
            </ul>
            <ul className="box">
              <li className="link_name">Services</li>
              <li>
                <a href="link">App design</a>
              </li>
              <li>
                <a href="link">Web design</a>
              </li>
              <li>
                <a href="link">Logo design</a>
              </li>
              <li>
                <a href="link">Banner design</a>
              </li>
            </ul>
            <ul className="box">
              <li className="link_name">Account</li>
              <li>
                <a href="link">Profile</a>
              </li>
              <li>
                <a href="link">My account</a>
              </li>
              <li>
                <a href="link">Prefrences</a>
              </li>
              <li>
                <a href="link">Purchase</a>
              </li>
            </ul>
            <ul className="box">
              <li className="link_name">Courses</li>
              <li>
                <a href="link">Web Development</a>
              </li>
              <li>
                <a href="link">App Development</a>
              </li>
              <li>
                <a href="link">Video Editing</a>
              </li>
              <li>
                <a href="link">Content Writting</a>
              </li>
            </ul>
            <ul className="box input-box">
              <li className="link_name">Subscribe</li>
              <li>
                <input type="text" placeholder="Enter your email" />
              </li>
              <li>
                <input type="button" value="Subscribe" />
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom-details">
          <div className="bottom_text">
            <span className="copyright_text">
              Copyright © 2021 <a href="link">Refresher</a>All rights reserved
            </span>
            <span className="policy_terms">
              <a href="link">Privacy policy</a>
              <a href="link">Terms & condition</a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
