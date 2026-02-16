import './TechnologyInnovation.css';
import technology1 from '../../assets/images/technology/1.avif';
import technology2 from '../../assets/images/technology/2.avif';
import technology3 from '../../assets/images/technology/3.avif';
import technology4 from '../../assets/images/technology/4.avif';

const TechnologyInnovation = () => {
    return (
        <>
            <section className="technology">
                <div className="technology-head">
                    <h4 data-aos="fade-up"><span>TECHNOLOGY &</span> <br /> INNOVATION</h4>
                    <p data-aos="fade">Deploying the latest ag-tech to drive decision making. From drone-based crop monitoring and satellite imagery analysis to IoT soil sensors, we ensure you have real-time data to optimize every input.</p>
                </div>
                <div className="technology-images-grid">
                    {/* Left */}
                    <div className="technology-left">
                        <img src={technology1} alt="Technology 1" loading="lazy" />
                    </div>
                    {/* Center */}
                    <div className="technology-center">
                        {/* Top */}
                        <div className="center-top">
                            <img src={technology2} alt="Technology 2" loading="lazy" />
                        </div>
                        {/* Bottom */}
                        <div className="center-bottom">
                            <img src={technology3} alt="Technology 3" loading="lazy" />
                        </div>
                    </div>
                    {/* Right */}
                    <div className="technology-right">
                        <img src={technology4} alt="Technology 4" loading="lazy" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default TechnologyInnovation;
