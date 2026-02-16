import './Advisory.css';
import advisoryImage from '../../assets/images/advisory-bg.png';

const Advisory = () => {
    return (
        <>
            <section className="advisory">
                <img src={advisoryImage} alt="Advisory Background" loading="lazy" />
                <div className="advisory-content">
                    <h3><span>ADVISORY</span> <br /> & CONSULTING</h3>
                    <p>Strategic guidance for agribusinesses, investors, and policymakers. We offer feasibility studies for greenfield projects, sustainability audits for existing operations, and roadmap development for carbon neutrality certification.</p>
                </div>
            </section>
        </>
    )
}

export default Advisory;
