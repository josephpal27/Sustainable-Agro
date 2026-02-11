import './OurImpact.css';
import impact1 from '../../assets/images/impact/1.avif';
import impact2 from '../../assets/images/impact/2.avif';
import impact3 from '../../assets/images/impact/3.avif';

let ourImpactData = [
    {
        id: 1,
        image: impact1,
        title: "Carbon Sequestered",
        desc: "Tracking tons of CO2e removed through soil management.",
    },
    {
        id: 2,
        image: impact2,
        title: "Water Saved",
        desc: "Liters conserved through precision irrigation.",
    },
    {
        id: 3,
        image: impact3,
        title: "Energy Generated",
        desc: "MWh of clean energy produced via on-farm renewables.",
    },
]

const OurImpact = () => {
    return (
        <>
            <section className="impact">
                <div className="impact-head">
                    <h4>OUR <span>IMPACT</span></h4>
                    <p>We measure success not just in <br /> yield, but in impact.</p>
                </div>
                <div className="impact-row">
                    {
                        ourImpactData.map((item, index) => {
                            return(
                                <div className="impact-box" key={index} id={`impact-box-${item.id}`}>
                                    <div className="impact-image">
                                        <img src={item.image} alt={item.title} loading="lazy" />
                                    </div>
                                    <div className="impact-content">
                                        <span>{item.title}</span>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default OurImpact
