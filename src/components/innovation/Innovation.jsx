import './Innovation.css';
import innovation1 from '../../assets/images/innovation/1.png';
import innovation2 from '../../assets/images/innovation/2.png';
import innovation3 from '../../assets/images/innovation/3.png';

const Innovation = () => {
    return (
        <>
            <section className="innovation">
                <h5 data-aos="fade-up">INNOVATION <span>IN ACTION</span></h5>
                <div className="innovation-row innovation-top-row">
                    <div className="innovation-box text-box" data-aos="fade">
                        <span>Agrivoltaics</span>
                        <p>Co-locating solar power generation with crop cultivation.</p>
                    </div>
                    <div className="innovation-box image-box">
                        <img src={innovation1} alt="Innovation 1" loading="lazy" />
                    </div>
                    <div className="innovation-box text-box" data-aos="fade">
                        <span>Controlled Environments</span>
                        <p>Shade net solutions for climate resilience.</p>
                    </div>
                </div>
                <div className="innovation-row innovation-bottom-row">
                    <div className="innovation-box image-box">
                        <img src={innovation2} alt="Innovation 2" loading="lazy" />
                    </div>
                    <div className="innovation-box text-box" data-aos="fade">
                        <span>Smart <br /> Irrigation</span>
                        <p>AI-driven water management systems.</p>
                    </div>
                    <div className="innovation-box image-box">
                        <img src={innovation3} alt="Innovation 3" loading="lazy" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Innovation
