import { Link } from 'react-router-dom';
import './WhoWeAre.css';
import { Button } from '@mui/material';

import aboutImg from '../../assets/images/about.avif';

const WhoWeAre = () => {
    return (
        <>
            <section className="who-we-are">
                <h1 data-aos="fade-up">WHO WE ARE</h1>
                <div className="who-we-are-content">
                    <div className="who-we-are-left" data-aos="fade-left">
                        <h2>ABOUT <br /> <span>SUSTAINABLE AGRO</span> </h2>
                        <Link to="/about"> <Button className="about-btn">Know More</Button> </Link>
                    </div>
                    <div className="who-we-are-center">
                        <img src={aboutImg} alt="Rice" loading="lazy" />
                    </div>
                    <div className="who-we-are-right" data-aos="fade-right">
                        <p>Sustainable Agro is a pioneer in scalable, evidence-based solutions for the modern agricultural landscape.</p>
                        <p>We combine deep agronomic expertise with renewable energy technologies to help growers, agribusinesses, and communities reduce their carbon footprint while increasing profitability.</p>
                    </div>
                    <span id="who-we-are-bg-text" data-aos="fade" data-aos-once="true">AGRO</span>
                </div>
            </section>
        </>
    )
}

export default WhoWeAre
