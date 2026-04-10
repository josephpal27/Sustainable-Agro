import './Culture.css';
import cultureImage from '../../../assets/images/culture.png';
import arrow from '../../../assets/images/arrow.png';

const Culture = () => {
    return (
        <>
            <section className="culture">
                <div className="culture-image">
                    <img src={cultureImage} alt="Culture" loading="lazy" />
                </div>
                <div className="culture-content">
                    <h3 data-aos="fade-up"><span>CULTURE</span> <br /> & BENEFITS</h3>
                    <p data-aos="fade">We value curiosity, resilience, and impact. Our employees enjoy competitive compensation, comprehensive health benefits, continuous professional development opportunities, and the chance to work on projects that matter.</p>
                    <img src={arrow} alt="Arrow" loading="lazy" />
                </div>
            </section>
        </>
    )
}

export default Culture
