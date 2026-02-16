import './Training.css';
import trainingBg from '../../assets/images/training-bg.avif';

const Training = () => {
    return (
        <>
            <section className="training">
                <img src={trainingBg} alt="Training Background" loading="lazy" />
                <div className="training-content">
                    <div className="line" data-aos="fade-right" data-aos-once="true"></div>
                    <div className="content-box">
                        <h5 data-aos="fade-up"><span>TRAINING &</span> <br /> CAPACITY BUILDING</h5>
                        <p data-aos="fade">Technology is only as good as the people who use it. We offer on-site training for farm managers and workers, ensuring that sustainable practices are correctly implemented and maintained long-term.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Training
