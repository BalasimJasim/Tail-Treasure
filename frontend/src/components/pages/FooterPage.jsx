import React from "react";
import {
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./footerpage.css";

export const FooterPage = () => {
  return (
    <div className="footer-parent-container">
      <div className="footer-header-icons">
        <h1 className="footer-h1">Tail-Treasure</h1>

        <div className="footer-icons">
          <a href="https://www.youtube.com" className="footer-a">
            <FaYoutube size={10} className="a-icon" />
          </a>
          <a href="https://www.instagram.com" className="footer-a">
            <FaInstagram size={10} className="a-icon" />
          </a>
          <a href="https://www.facebook.com" className="footer-a">
            <FaFacebook size={10} className="a-icon" />
          </a>
          <a href="https://www.twitter.com" className="footer-a">
            <FaTwitter size={10} className="a-icon" />
          </a>
        </div>

        <div className="footer-card">
          <div className="footer-menu">
            <h2 className="footer-h2">Menu</h2>
            <ul className="footer-ul">
              <li className="footer-li">Catalog</li>
              <li className="footer-li">Actions</li>
              <li className="footer-li">Shipment and Payment</li>
              <li className="footer-li">Contacts</li>
            </ul>
          </div>

          <div className="footer-catalogue">
            <h2 className="footer-h2">Catalogue</h2>
            <ul className="footer-ul">
              <li className="footer-li">For Dogs</li>
              <li className="footer-li">For Cats</li>
              <li className="footer-li">For the Birds</li>
              <li className="footer-li">For Rodents</li>
            </ul>
          </div>
          <div className="footer-contact">
            <h2 className="footer-h2">Contacts</h2>
            <ul className="footer-ul">
              <li className="footer-li">
                <FaEnvelope className="footer-icon" /> - Email -
                <span className="footer-span">Tail_treasure@gmail.com</span>
              </li>
              <li className="footer-li">
                <FaPhone className="footer-icon" /> - Mobile -
                <span className="footer-span">015785170045</span>
              </li>
              <li className="footer-li">
                <FaClock className="footer-icon" /> - Opening hours from 8:00 to
                21:00
              </li>
              <li className="footer-li">
                <a
                  href="https://www.google.com/maps/place/Alexanderplatz+Strasse+77,+77777+Berlin,+Germany"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-a"
                >
                  <FaMapMarkerAlt className="footer-icon" /> - Address
                  <span className="footer-span">
                    - Alexanderplatz Strasse 77, 77777 Berlin, Germany
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
