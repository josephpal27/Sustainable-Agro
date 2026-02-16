import './Advisory.css';
import advisoryBg from '../../assets/images/advisory-bg.avif';

const Advisory = () => {
    return (
        <>
            <section className="advisory">
                <img src={advisoryBg} alt="Advisory Background" loading="lazy" />
                <div className="advisory-content">
                    <h3 data-aos="fade-up"><span>ADVISORY</span> <br /> & CONSULTING</h3>
                    <p data-aos="fade">Strategic guidance for agribusinesses, investors, and policymakers. We offer feasibility studies for greenfield projects, sustainability audits for existing operations, and roadmap development for carbon neutrality certification.</p>
                </div>
            </section>
        </>
    )
}

export default Advisory;
