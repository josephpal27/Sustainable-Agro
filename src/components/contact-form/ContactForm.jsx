import './ContactForm.css';

const ContactForm = () => {
    return (
        <>
            <div className="contact-form" data-aos="fade-up" data-aos-once="true">
                <span>Get In Touch</span>
                <p>You’ll be heard by people who care and respond. <br />
                    Get in touch with our team.</p>
                <form action="">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" name="name" id="name" required />
                    <label htmlFor="email">Email Id</label>
                    <input type="email" name="email" id="email" required />
                    <label htmlFor="msg">Message</label>
                    <textarea name="message" id="msg" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </>
    )
}

export default ContactForm
