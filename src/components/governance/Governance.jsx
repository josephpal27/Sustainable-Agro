import './Governance.css';
import governanceImage1 from '../../assets/images/governance-1.avif';
import governanceImage2 from '../../assets/images/governance-2.avif';

const Governance = () => {
    return (
        <>
            <section className="governance">
                <h4 data-aos="fade-up"><span>GOVERNANCE</span> <br /> & ETHICS</h4>
                <div className="governance-row">
                    <div className="governance-image">
                        <img src={governanceImage1} alt="Governance 1" loading="lazy" />
                        <img src={governanceImage2} alt="Governance 2" loading="lazy" />
                    </div>
                    <div className="governance-content" data-aos="fade">
                        <p>Sustainable Agro operates with the highest standards of transparency and integrity. Our governance framework ensures accountability to all stakeholders, from investors to local communities. We maintain strict compliance with international anti-corruption and labor standards.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Governance
