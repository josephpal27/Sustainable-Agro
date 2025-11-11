import { Link } from 'react-router-dom';
import './WhoWeAre.css';
import { Button } from '@mui/material';

import aboutImg from '../../assets/images/about.avif';

const WhoWeAre = () => {
    return (
        <>
            <section className="who-we-are">
                <h1>WHO WE ARE</h1>
                <div className="who-we-are-content">
                    <div className="who-we-are-left">
                        <h2>ABOUT <br /> <span>SUSTAINABLE AGRO</span> </h2>
                        <Link to="/about"> <Button className="about-btn">MORE ABOUT</Button> </Link>
                    </div>
                    <div className="who-we-are-center">
                        <img src={aboutImg} alt="Rice" loading="lazy" />
                    </div>
                    <div className="who-we-are-right">
                        <p>Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
                        <p>The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classi</p>
                    </div>
                    <span id="who-we-are-bg-text">AGRO</span>
                </div>
            </section>
        </>
    )
}

export default WhoWeAre
