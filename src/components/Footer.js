import React from 'react';
import { FiSend, FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 border-top border-secondary border-opacity-25" id="footer">
      <div className="container">

        {/* Main Content Grid */}
        <div className="row g-4 justify-content-between mb-5">

          {/* Brand Profile */}
          <div className="col-12 col-lg-4 pe-lg-4">
            <h2 className="display-6 fw-bold mb-3">
              Coffee<span className="text-danger">.</span>co
            </h2>
            <p className="text-white-50 lh-lg mb-0 small">
              Experience world-class hospitality, handcrafted coffee roasted to perfection, and an unmatched cozy atmosphere for meetings, relaxation, and luxury stays.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="col-6 col-md-3 col-lg-2">
            <h6 className="text-uppercase tracking-wider text-danger fw-bold mb-3 small">Quick Links</h6>
            <ul className="list-unstyled text-white-50 small mb-0 lh-lg">
              <li className="mb-1">
                <a href="#about" className="text-white-50 text-decoration-none text-hover-white">About Us</a>
              </li>
              <li className="mb-1">
                <a href="#menu" className="text-white-50 text-decoration-none text-hover-white">Coffee Menu</a>
              </li>
              <li className="mb-1">
                <a href="#rooms" className="text-white-50 text-decoration-none text-hover-white">Hotel Rooms</a>
              </li>
              <li className="mb-1">
                <a href="#booking" className="text-white-50 text-decoration-none text-hover-white">Reservations</a>
              </li>
            </ul>
          </div>

          {/* Contact & Location Details */}
          <div className="col-6 col-md-4 col-lg-3">
            <h6 className="text-uppercase tracking-wider text-danger fw-bold mb-3 small">Location & Contact</h6>
            <ul className="list-unstyled text-white-50 small mb-0 lh-lg">
              <li className="d-flex align-items-start gap-2 mb-2">
                <FiMapPin className="text-danger flex-shrink-0 mt-1" />
                <span>Islamabad </span>
              </li>
              <li className="d-flex align-items-center gap-2 mb-2">
                <FiPhone className="text-danger flex-shrink-0" />
                <a href="tel:+923359199919" className="text-white-50 text-decoration-none">
                  +92 335 9199919
                </a>
              </li>
              <li className="d-flex align-items-center gap-2 mb-2">
                <FiMail className="text-danger flex-shrink-0" />
                <a href="mailto:saifullahkh484@gmail.com" className="text-white-50 text-decoration-none text-truncate">
                  saifullahkh484@gmail.com
                </a>
              </li>
              <li className="d-flex align-items-center gap-2">
                <FiClock className="text-danger flex-shrink-0" />
                <span>Mon - Sun: 8AM - 11PM</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Form */}
          <div className="col-12 col-md-5 col-lg-3">
            <h6 className="text-uppercase tracking-wider text-danger fw-bold mb-3 small">Stay Connected</h6>
            <p className="text-white-50 small mb-3">Subscribe for exclusive offers and seasonal announcements.</p>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="input-group">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="form-control bg-dark text-white border-secondary small shadow-none"
                  required
                />
                <button className="btn btn-danger px-3 d-flex align-items-center" type="submit" aria-label="Subscribe">
                  <FiSend />
                </button>
              </div>
            </form>
          </div>

        </div>

        <hr className="border-secondary opacity-25 my-4" />

        {/* Bottom Bar & Social Media */}
        <div className="row align-items-center justify-content-between text-center text-md-start gy-3">
          
          <div className="col-md-4">
            <p className="text-white-50 small mb-0">
              &copy; {new Date().getFullYear()} <span className="text-white fw-semibold">Coffee.co</span>. All rights reserved.
            </p>
          </div>

          {/* Social Icons (Centered on mobile, right-aligned on desktop) */}
          <div className="col-md-4 d-flex justify-content-center">
            <div className="d-flex gap-2">
              <a href="#footer" className="btn btn-outline-secondary text-white rounded-circle d-flex align-items-center justify-content-center p-0" style={{ width: '34px', height: '34px' }} aria-label="Facebook">
                <FaFacebookF size={12} />
              </a>
              <a href="#footer" className="btn btn-outline-secondary text-white rounded-circle d-flex align-items-center justify-content-center p-0" style={{ width: '34px', height: '34px' }} aria-label="Instagram">
                <FaInstagram size={12} />
              </a>
              <a href="#footer" className="btn btn-outline-secondary text-white rounded-circle d-flex align-items-center justify-content-center p-0" style={{ width: '34px', height: '34px' }} aria-label="TikTok">
                <FaTiktok size={12} />
              </a>
            </div>
          </div>

          <div className="col-md-4 text-md-end">
            <p className="text-white-50 small mb-0">
              Designed by <span className="text-white fw-medium">Saif Ullah Khan</span>
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;