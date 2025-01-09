import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Library.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row row__column">
          <Link to="/" className="footer__link">
            <figure className="footer__logo">
              <img src={logo} alt="Library Logo" className="footer__logo--img" />
            </figure>
          </Link>
          <div className="footer__list">
            <Link to="/" className="footer__link">Home</Link>
            <span className="footer__link no-cursor">About</span>
            <Link to="/books" className="footer__link">Books</Link>
            <Link to="/cart" className="footer__link">Cart</Link>
          </div>
          <div className="footer__copyright">
            <p>&copy; 2023 Library. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;