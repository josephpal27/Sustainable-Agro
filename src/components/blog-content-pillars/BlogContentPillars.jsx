import './BlogContentPillars.css';
import contentPillars from '../../assets/images/tracktor.avif';

const BlogContentPillars = () => {
    return (
        <>
            <section className="content-pillars">
                <h2 data-aos="fade-up"><span>CONTENT</span> <br /> PILLARS</h2>
                <div className="pillar-body">
                    <img src={contentPillars} alt="Content Pillars" loading="lazy" />

                    <div className="pillar-content-box" id="pillar-content-box-1" data-aos="fade">
                        <span>Agri-Tech Trends</span>
                        <p>Reviews of emerging technologies.</p>
                    </div>
                    <div className="pillar-content-box" id="pillar-content-box-2" data-aos="fade">
                        <span>Practical Agronomy</span>
                        <p>How-to guides for farm managers.</p>
                    </div>
                    <div className="pillar-content-box" id="pillar-content-box-3" data-aos="fade">
                        <span>Policy & <br /> Regulation</span>
                        <p>Updates oncarbon <br /> markets and subsidies.</p>
                    </div>
                    <div className="pillar-content-box" id="pillar-content-box-4" data-aos="fade">
                        <span> 	Sustainability <br /> Strategy</span>
                        <p>Corporate ESG implementation.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogContentPillars
