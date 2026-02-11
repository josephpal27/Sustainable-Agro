import './MissionVision.css';
import missionImage from '../../assets/images/mission.avif'
import visionImage from '../../assets/images/vision.avif'

const MissionVision = () => {
    return (
        <>
            <section className="mission-vision">
                <div className="mv-box" id="mission-box">
                    <div className="mv-box-left">
                        <span data-aos="fade">OUR <br /> <b>MISSION</b></span>
                    </div>
                    <div className="mv-box-right">
                        <p data-aos="fade">To accelerate the transition to net-zero agriculture by providing scalable technologies and expertise that empower growers to feed the world sustainably.</p>
                    </div>
                    <img src={missionImage} alt="Mission" loading="lazy" data-aos="zoom-in" data-aos-once="true" />
                </div>
                <h2>MISSION & VISION</h2>
                <div className="mv-box" id="vision-box">
                    <div className="mv-box-left">
                        <p data-aos="fade">A world where agriculture regenerates the planet, and energy production works in harmony with nature.</p>
                    </div>
                    <div className="mv-box-right">
                        <span data-aos="fade">OUR <br /> <b>VISION</b></span>
                    </div>
                    <img src={visionImage} alt="Vision" loading="lazy" data-aos="zoom-out" data-aos-once="true" />
                </div>
            </section>
        </>
    )
}

export default MissionVision
