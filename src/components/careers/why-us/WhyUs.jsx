import './WhyUs.css';
import whyUsImage from '../../../assets/images/why-us.png';
import arrow from '../../../assets/images/arrow.png';

const WhyUs = () => {
    return (
        <>
            <section className="why-us">
                <div className="why-us-content">
                    <h2> " <span>WHY</span> <br /> JOIN US " </h2>
                    <p>Join a team that is redefining the future of our planet. At Sustainable Agro, you will work at the cutting edge of climate-tech and agronomy. We offer a collaborative, fast-paced environment where your work directly contributes to global sustainability goals.</p>
                    <img src={arrow} alt="Arrow" loading="lazy" />
                </div>
                <div className="why-us-image">
                    <img src={whyUsImage} alt="Why Us" loading="lazy" />
                </div>
            </section>
        </>
    )
}

export default WhyUs
