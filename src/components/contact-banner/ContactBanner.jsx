import './ContactBanner.css';

const ContactBanner = () => {
    return (
        <>
            <section className="contact-banner">
                <img src="/images/banners/blogs-banner.avif" alt="About Banner" loading="eager" />
                <div className="banner-content">
                    <h1 data-aos="fade-up">CONTACT US</h1>
                    <p data-aos="fade">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, mollitia vel hic cum debitis alias?</p>
                </div>
            </section>
        </>
    )
}

export default ContactBanner
