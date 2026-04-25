import './Header.css';

import { IoHomeSharp, IoMailOpen } from "react-icons/io5";
import { FaPhone, FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Header = () => {
  return (
    <>
      <header>
        <div className="header-left">
            <span>Powering the Future of Agriculture</span>
        </div>
        <div className="header-right">
            <div className="head-box">
                <IoMailOpen className="icon"/>
                <p>info@sustainableagro.net</p>
            </div>
            <div className="head-box">
                <FaPhone className="icon" />
                <p>+225 05073 81923</p>
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
