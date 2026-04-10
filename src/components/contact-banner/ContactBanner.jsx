import './ContactBanner.css';

const ContactBanner = () => {
    return (
        <>
            <section className="contact-banner">
                <img src="/images/banners/blogs-banner.avif" alt="Contact Banner" loading="eager" />
                <div className="banner-content">
                    <h1 data-aos="fade-up">CONTACT US</h1>
                    <p data-aos="fade">Ready to transform your agricultural operations? Get in touch with our team today.</p>
                </div>
            </section>
        </>
    )
}

export default ContactBanner
