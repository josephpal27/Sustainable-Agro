import './SolutionsBanner.css';

const SolutionsBanner = () => {
    return (
        <>
            <section className="solutions-banner">
                <img src="/images/banners/solutions-banner.avif" alt="Solutions Banner" loading="eager" />
                <div className="banner-content">
                    <h1 data-aos="fade-up">SUSTAINABLE <br /> FARMING SOLUTIONS</h1>
                    <p data-aos="fade">We provide end-to-end support for transitioning conventional farms to regenerative systems. Our services include soil microbiome restoration, cover crop planning, and integrated pest management (IPM) strategies that reduce chemical dependency while maintaining yield.</p>
                </div>
            </section>
        </>
    )
}

export default SolutionsBanner
