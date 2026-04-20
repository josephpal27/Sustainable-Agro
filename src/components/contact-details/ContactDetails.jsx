import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';
import './ContactDetails.css';
import ContactForm from '../contact-form/ContactForm';

const ContactDetails = () => {
    return (
        <>
            <section className="contact-details">
                <div className="contact-left">
                    <h2 data-aos="fade"><span>Get in touch</span> for support, queries, <span>or</span> collaborations</h2>
                    <p data-aos="fade">Whether you are looking to transition to regenerative farming systems, integrate renewable energy solutions like agrivoltaics, or require strategic agronomic advisory, our dedicated team is ready to assist you.</p>
                    <div className="contact-details-boxes-row">
                        <div className="details-box">
                            <span>Call Us</span>
                            <a href="tel:+2250507381923">+225 05073 81923</a>
                        </div>
                        <div className="details-box">
                            <span>Location</span>
                            <a href="https://maps.app.goo.gl/8ebzGpfZayKvgU2Y7" target="_blank">SUSTAINABLE AGRO Vridi Cite' Port, Abidjan, Co'te d' Ivoire 01 BP 12171, ABIDJAN 01</a>
                        </div>
                        <div className="details-box">
                            <span>Email Us</span>
                            <a href="mailto:info@sustainableagro.net">info@sustainableagro.net</a>
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
                    <ContactForm />
                </div>
            </section>
        </>
    )
}

export default ContactDetails
