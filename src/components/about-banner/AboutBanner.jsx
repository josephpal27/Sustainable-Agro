import './AboutBanner.css';

const AboutBanner = () => {
    return (
        <>
            <section className="about-banner">
                <img src="/images/banners/about-banner.avif" alt="About Banner" loading="eager" />
                <div className="banner-content">
                    <h1>ABOUT US</h1>
                    <p>Sustainable Agro represents the next evolution in land management. We are an integrated solutions provider dedicated to transforming how food is grown and how energy is utilized in the agricultural sector. Founded by a team of agronomists and energy engineers, we bridge the divide between ecological stewardship and economic imperative.</p>
                </div>
            </section>
        </>
    )
}

export default AboutBanner
