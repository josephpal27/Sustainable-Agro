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
                    <div className="founder-msg-left">
                        <h3>Founder's <span>Message</span></h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nesciunt.</p>
                        <Link to="/about"><Button>Read More</Button></Link>
                    </div>
                    <div className="founder-msg-right">
                        <div className="founder-card">
                            <div className="card-image">
                                <div className="circle"></div>
                                <img src={founderImg2} alt="Founder" loading="lazy" />
                            </div>
                            <div className="card-desc">
                                <p>Lorem, ipsum dolor sit amet adipis elit. Non quam omnis est ducimus. Lorem, adipis amet ipsum dolor. Lorem, ipsum dolor sit amet adipis elit. Non quam omnis est ducimus. Lorem, adipis.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FoundersMessage
