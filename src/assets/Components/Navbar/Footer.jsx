import React from "react";
import { Link } from "react-router-dom";
import ftr_logo from "../../img/beach.png";
import ftr_bg from "../../img/home/ftr-bg-img.jpg";
// import backgroundImage from './path-to-image.jpg';
import bgImage from "../../img/home/ftr-bg-img.jpg";

const Footer = () => {
  return (
    <footer
  className="footer-area background"
  style={{
    backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.28), rgba(0, 0, 0, 0.35)), url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100%',
    backgroundAttachment: "fixed",
  }}
>
      <div class="container">
        <div class="row ftr-row">
          <div class="col-md-5">
            <div class="footer__widget">
              <div class="footer-log">
                <a href="index.html" class="logo">
                  <img src={ftr_logo} alt="logo" width="80px" />
                  <h2>Lets Travel</h2>
                </a>
              </div>
              <p>
                At Let’s Travel, we are your trusted partners in crafting
                unforgettable journeys. Whether you’re seeking serene escapes,
                adventurous getaways, or cultural explorations, we bring your
                travel dreams to life.
              </p>
            </div>
          </div>
          <div class="col-md-2">
            <div class="footer__widget">
              <h6 class="widget-title">Quick Links</h6>
              <ul class="fot-list">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about-us">About Us</Link>
                    </li>
                    <li>
                        <Link to="tour-packages">Tour Packages</Link>
                    </li>
                    {/* <li>
                        <Link to="destination">Destination</Link>
                    </li> */}
                    <li>
                        <Link to="gallery">Gallery</Link>
                    </li>
                    <li>
                        <Link to="contact-us">Contact Us</Link>
                    </li> 
              </ul>
            </div>
          </div>
          <div class="col-md-2">
            <div class="footer__widget mb-25">
              <h6 class="widget-title mb-35">Social Media</h6>
              <div class="social-media footer__social mt-30">
                <a href="#">
                  <i class="fa fa-facebook-f"></i>Facebook
                </a>
                <a href="#">
                  <i class="fa fa-instagram"></i>Instagram
                </a>
                <a href="#">
                  <i class="fa fa-whatsapp"></i>
                  Whatsapp
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="footer__widget mb-30">
              <h6 class="widget-title mb-35">Contact</h6>
              <ul class="fot-list mb-30">
                <p>
                  <a href="tel:+911111111111">
                    <i class="fa fa-phone ftr-call-icon1"></i> +91 1111111111
                  </a>
                </p>
                <p>
                  <a href="mailto:letstravel@gmail.com" class="mail-icon1">
                    <i class="fa fa-envelope"></i> letstravel@gmail.com
                  </a>
                </p>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="copy-right-area border-bot pt-40">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-12 wow fadeInUp2 animated" data-wow-delay=".5s">
              <div class="copyright text-center">
                <h5>
                  Copyright@ 2024 <a href="#">Lets Travel</a>. All Rights
                  Reserved
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
