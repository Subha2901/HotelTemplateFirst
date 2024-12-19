import React from "react";
import "./Footer.css";
import Logo from "../../assets/Images/HotelLogo.png";

export default function Footer() {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <div className="footer-logo">
          <img
            src={Logo}
            alt=""
            style={{
              height: "80px",
              width: "80px",
              boxShadow: "box-shadow: rgb(255 248 248 / 25%) 1px 1px 100px 1px",
              borderRadius: "20%",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: "5px",
              borderLeft: "2px solid grey",
              fontSize: "35px",
            }}
          >
            <p style={{ margin: "0" }}>Grand</p>
            <p style={{ margin: "0", fontSize: "25px" }}>Hotel</p>
          </div>
        </div>

        <p className="footer-links">
          <a href="#" className="link-1">
            Home
          </a>

          <a href="#">Blog</a>

          <a href="#">Pricing</a>

          <a href="#">About</a>

          <a href="#">Faq</a>

          <a href="#">Contact</a>
        </p>

        <p className="footer-company-name">Company Name © 2015</p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span>444 S. Cedros Ave</span> Solana Beach, California
          </p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p>+1.555.555.5555</p>
        </div>

        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <a href="mailto:support@company.com">support@company.com</a>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>
          Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
          euismod convallis velit, eu auctor lacus vehicula sit amet.
        </p>

        <div className="footer-icons">
          <a href="#">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fa fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
