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

const getCategoryLink = (category) => {
  switch (category) {
    case "dogs":
      return "/products/category/dogs";
    case "cats":
      return "/products/category/cats";
    case "birds":
      return "/products/category/birds";
    case "rodents":
      return "/products/category/rodents";
    default:
      return "/";
  }
};

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
              <li className="footer-li">
                <a href={getCategoryLink("dogs")} className="footer-a">
                  For Dogs
                </a>
              </li>
              <li className="footer-li">
                <a href={getCategoryLink("cats")} className="footer-a">
                  For Cats
                </a>
              </li>
              <li className="footer-li">
                <a href={getCategoryLink("birds")} className="footer-a">
                  For the Birds
                </a>
              </li>
              <li className="footer-li">
                <a href={getCategoryLink("rodents")} className="footer-a">
                  For Rodents
                </a>
              </li>
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
                <FaMapMarkerAlt className="footer-icon" /> - Address
                <span className="footer-span">
                  -
                  <a
                    className="footer-a"
                    href="https://www.google.com/maps/place/Alexanderplatz+Strasse+77,+77777+Berlin,+Germany"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Alexanderplatz Strasse 77, 77777 Berlin, Germany
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
