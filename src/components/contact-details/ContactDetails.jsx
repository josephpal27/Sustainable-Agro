import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';
import './ContactDetails.css';

const ContactDetails = () => {
    return (
        <>
            <section className="contact-details">
                <div className="contact-left">
                    <h2><span>Get in touch</span> for support, queries, <span>or</span> collaborations</h2>
                    <p>Whether you need a quote for our power transformers, require 24x7 breakdown support, or want to discuss a global partnership, our dedicated team is ready to assist you.</p>
                    <div className="contact-details-boxes-row">
                        <div className="details-box">
                            <span>Call Us</span>
                            <a href="">+91 00000 00000</a>
                        </div>
                        <div className="details-box">
                            <span>Location</span>
                            <a href="" target="_blank">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</a>
                        </div>
                        <div className="details-box">
                            <span>Email Us</span>
                            <a href="" target="_blank">example@gmail.com</a>
                        </div>
                        <div className="details-box">
                            <span>Social Handles</span>
                            <div className="social-icons">
                                <a href="" target="_blank"> <FaInstagram /> </a>
                                <a href="" target="_blank"> <FaFacebookF /> </a>
                                <a href="" target="_blank"> <FaLinkedinIn /> </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-right">

                </div>
            </section>
        </>
    )
}

export default ContactDetails
