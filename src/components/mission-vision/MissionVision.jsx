import './MissionVision.css';
import missionImage from '../../assets/images/mission.png'
import visionImage from '../../assets/images/vision.png'

const MissionVision = () => {
    return (
        <>
            <section className="mission-vision">
                <div className="mv-box" id="mission-box">
                    <div className="mv-box-left">
                        <span>OUR <br /> <b>MISSION</b></span>
                    </div>
                    <div className="mv-box-right">
                        <p>To accelerate the transition to net-zero agriculture by providing scalable technologies and expertise that empower growers to feed the world sustainably.</p>
                    </div>
                    <img src={missionImage} alt="Mission" loading="lazy" />
                </div>
                <h2>MISSION & VISION</h2>
                <div className="mv-box" id="vision-box">
                    <div className="mv-box-left">
                        <p>A world where agriculture regenerates the planet, and energy production works in harmony with nature.</p>
                    </div>
                    <div className="mv-box-right">
                        <span>OUR <br /> <b>VISION</b></span>
                    </div>
                    <img src={visionImage} alt="Vision" loading="lazy" />
                </div>
            </section>
        </>
    )
}

export default MissionVision
