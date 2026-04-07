import { Button } from '@mui/material';
import './FoundersMessage.css';
import { Link } from 'react-router-dom';

import founderImg from '../../assets/images/founder-demo-1.avif';
import founderImg2 from '../../assets/images/founder-demo-2.avif';

const FoundersMessage = () => {
    return (
        <>
            <section className="founders-msg">
                <div className="founder-image">
                    <img src={founderImg} alt="Founder" loading="lazy" />
                </div>
                <div className="founders-msg-content">
                    <div className="founder-msg-left" data-aos="fade">
                        <h3>Founder's <span>Message</span></h3>
                        <p>A Vision for <br /> Resilient Growth</p>
                        <Link to="/about"><Button>Read More</Button></Link>
                    </div>
                    <div className="founder-msg-right">
                        <div className="founder-card" data-aos="fade-up">
                            <div className="card-image">
                                <div className="circle"></div>
                                <img src={founderImg2} alt="Founder" loading="lazy" />
                            </div>
                            <div className="card-desc">
                                <p>"Sustainable Agro was founded on a singular conviction: that the future of agriculture lies in its ability to regenerate the earth rather than deplete it. We are committed to making sustainable practices practical, measurable, and economically viable." <br /> <span>— Founder, Sustainable Agro</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FoundersMessage
