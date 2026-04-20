import './Footer.css';
import { Link } from 'react-router-dom';
import footLogo from '../../assets/images/logo/logo.webp';
import { IoHomeSharp, IoMailOpen } from "react-icons/io5";
import { FaPhone, FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-content">
            <div className="foot-box">
                <img src={footLogo} alt="Logo" loading="lazy" />
                <p>Integrating renewable energy solutions with sustainable farming practices to drive yield resilience, resource efficiency, and climate-smart growth.</p>
            </div>
            <div className="foot-box">
                <span>Quick Links</span>
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/solutions">Our Solutions</Link>
                <Link to="/blogs">Our Blogs</Link>
                <Link to="/esg-and-impact">ESG & Impact</Link>
                <Link to="/careers">Careers</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className="foot-box">
                <span>Brands</span>
                <Link to="/tandhan-power">Tandhan Power</Link>
                <Link to="/tandhan-polyplast">Tandhan Polyplast</Link>
                <Link to="/riz-prime">Riz Prime</Link>
            </div>
            <div className="foot-box">
                <span>Get In Touch</span>
                <a href="https://maps.app.goo.gl/8ebzGpfZayKvgU2Y7" target="_blank"><IoHomeSharp className="icon home-icon" /> SUSTAINABLE AGRO Vridi Cite' Port, Abidjan, Co'te d' Ivoire 01 BP 12171, ABIDJAN 01</a>
                <a href="mailto:info@sustainableagro.net" ><IoMailOpen className="icon"/> info@sustainableagro.net</a>
                <a href="tel:+2250507381923"><FaPhone className="icon phone-icon" /> +225 05073 81923</a>
                <div className="social-icons">
                    <a href="#" target="_blank"><FaFacebookF className="icon" /></a>
                    <a href="#" target="_blank"><FaInstagram className="icon" /></a>
                    <a href="#" target="_blank"><FaXTwitter className="icon" /></a>
                </div>
            </div>
        </div>
        <div className="copyright">
            <p>Copyright © 2025 | Sustainable Agro | All Rights Reserved</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
