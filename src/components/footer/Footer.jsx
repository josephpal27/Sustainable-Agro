import './Footer.css';
import { Link } from 'react-router-dom';
import footLogo from '../../assets/images/logo/logo.png';
import { IoHomeSharp, IoMailOpen } from "react-icons/io5";
import { FaPhone, FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-content">
            <div className="foot-box">
                <img src={footLogo} alt="Logo" loading="lazy" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At sit, iure quas mollitia quam voluptatem doloremque hic blanditiis iste maxime quod reprehenderit vero ab suscipit facilis fugiat vel molestias delectus!</p>
            </div>
            <div className="foot-box">
                <span>Quick Links</span>
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/media">Media</Link>
                <Link to="/blogs">Blogs</Link>
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
                <a href="#"><IoHomeSharp className="icon" /> 202 Park Avenue, New York City</a>
                <a href="#"><IoMailOpen className="icon"/> example@gmail.com</a>
                <a href="#"><FaPhone className="icon" /> +91 123 456 7890</a>
                <div className="social-icons">
                    <a href="#" target="_blank"><FaFacebookF className="icon" /></a>
                    <a href="#" target="_blank"><FaInstagram className="icon" /></a>
                    <a href="#" target="_blank"><FaXTwitter className="icon" /></a>
                </div>
            </div>
        </div>
        <div className="copyright">

        </div>
      </footer>
    </>
  )
}

export default Footer
