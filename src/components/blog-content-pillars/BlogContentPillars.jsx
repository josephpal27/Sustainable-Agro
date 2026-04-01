import './BlogContentPillars.css';
import contentPillars from '../../assets/images/tracktor.png';

const BlogContentPillars = () => {
    return (
        <>
            <section className="content-pillars">
                <h2><span>CONTENT</span> <br /> PILLARS</h2>
                <div className="pillar-body">
                    <img src={contentPillars} alt="Content Pillars" loading="lazy" />

                    <div className="pillar-content-box" id="pillar-content-box-1">
                        <span>Agri-Tech Trends</span>
                        <p>Reviews of emerging technologies.</p>
                    </div>
                    <div className="pillar-content-box" id="pillar-content-box-2">
                        <span>Practical Agronomy</span>
                        <p>How-to guides for farm managers.</p>
                    </div>
                    <div className="pillar-content-box" id="pillar-content-box-3">
                        <span>Policy & <br /> Regulation</span>
                        <p>Updates oncarbon <br /> markets and subsidies.</p>
                    </div>
                    <div className="pillar-content-box" id="pillar-content-box-4">
                        <span> 	Sustainability <br /> Strategy</span>
                        <p>Corporate ESG implementation.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogContentPillars
