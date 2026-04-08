import './SocialImpact.css';
import socialImpact1 from '../../assets/images/social-impact/1.png';
import socialImpact2 from '../../assets/images/social-impact/2.png';
import socialImpact3 from '../../assets/images/social-impact/3.png';

const SocialImpact = () => {
    return (
        <>
            <section className="social-impact">
                <div className="social-impact-content">
                    <h3><span>SOCIAL</span> <br /> IMPACT</h3>
                    <p>People are at the heart of our mission. We ensure fair labor practices across our supply chain and actively invest in community development. Our programs focus on empowering smallholder farmers, promoting gender equality in agriculture, and ensuring safe working conditions.</p>
                </div>
                <div className="social-impact-images">
                    <div className="img-box">
                        <img src={socialImpact1} alt="Social Impact 1" loading="lazy" />
                    </div>
                    <div className="img-box">
                        <img src={socialImpact2} alt="Social Impact 2" loading="lazy" />
                    </div>
                    <div className="img-box">
                        <img src={socialImpact3} alt="Social Impact 3" loading="lazy" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default SocialImpact
