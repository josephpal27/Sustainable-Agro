import './Header.css';

import { IoHomeSharp } from "react-icons/io5";
import { FaPhone, FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Header = () => {
  return (
    <>
      <header>
        <div className="header-left">
            <span>Providing Exceptional Landscaping</span>
        </div>
        <div className="header-right">
            <div className="head-box">
                <IoHomeSharp className="icon" />
                <p>202 Park Avenue, New York City</p>
            </div>
            <div className="head-box">
                <FaPhone className="icon" />
                <p>+91 123 456 7890</p>
            </div>
            <div className="social-icons">
                <a href="#" target="_blank"><FaFacebookF className="icon" /></a>
                <a href="#" target="_blank"><FaInstagram className="icon" /></a>
                <a href="#" target="_blank"><FaXTwitter className="icon" /></a>
            </div>
        </div>
      </header>
    </>
  )
}

export default Header
