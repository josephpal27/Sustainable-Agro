import './CareersBanner.css';

const CareersBanner = () => {
    return (
        <>
            <section className="careers-banner">
                <img src="/images/banners/career-banner.avif" alt="Careers Banner" loading="eager" />
                <div className="banner-content">
                    <h1 data-aos="fade-up">CAREER</h1>
                    <p data-aos="fade">Join a team that is redefining the future of our planet. At Sustainable Agro, you will work at the cutting edge of climate-tech and agronomy. We offer a collaborative, fast-paced environment where your work directly contributes to global sustainability goals.</p>
                </div>
            </section>
        </>
    )
}

export default CareersBanner
