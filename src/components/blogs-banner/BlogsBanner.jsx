import './BlogsBanner.css';

const BlogsBanner = () => {
    return (
        <>
            <section className="blogs-banner">
                <img src="/images/banners/blogs-banner.png" alt="About Banner" loading="eager" />
                <div className="banner-content">
                    <h1 data-aos="fade-up">EDITORIAL <br /> STRATEGY</h1>
                    <p data-aos="fade">Our insights hub serves as a knowledge resource for the industry, sharing technical guidance, market analysis, and thought leadership on the convergence of energy and agriculture.</p>
                </div>
            </section>
        </>
    )
}

export default BlogsBanner
