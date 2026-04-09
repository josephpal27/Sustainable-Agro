import './EnvironmentalResponsibility.css';
import environmentalImage from '../../assets/images/environmental.avif';

const EnvironmentalResponsibility = () => {
    return (
        <>
            <section className="environmental">
                <div className="environmental-image">
                    <img src={environmentalImage} alt="Environmental" loading="lazy" />
                </div>
                <div className="environmental-content">
                    <h2 data-aos="fade-up"><span>Environmental</span> Responsibility</h2>
                    <p data-aos="fade">We are dedicated to minimizing the environmental footprint of agriculture. Our operations prioritize biodiversity protection, watershed management, and the elimination of harmful chemical inputs. We rigorously track Scope 1, 2, and 3 emissions for all projects.</p>
                </div>
                <div className="bg-label">
                    <span>Environmental</span> 
                    <span>Responsibility</span>
                </div>
            </section>
        </>
    )
}

export default EnvironmentalResponsibility
