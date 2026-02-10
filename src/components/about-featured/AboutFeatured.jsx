import './AboutFeatured.css';
import featured1 from '../../assets/images/about-featured/1.png';
import featured2 from '../../assets/images/about-featured/2.png';
import featured3 from '../../assets/images/about-featured/3.png';
import featured4 from '../../assets/images/about-featured/4.png';

const AboutFeatured = () => {
    return (
        <>
            <section className="about-featured">
                <div className="featured-box">
                    <img src={featured1} alt="Featured 1" loading="lazy" />
                </div>
                <div className="featured-box">
                    <img src={featured2} alt="Featured 2" loading="lazy" />
                </div>
                <div className="featured-box">
                    <img src={featured3} alt="Featured 3" loading="lazy" />
                </div>
                <div className="featured-box">
                    <img src={featured4} alt="Featured 4" loading="lazy" />
                </div>
            </section>
        </>
    )
}

export default AboutFeatured
