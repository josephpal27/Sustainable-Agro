import './OurValues.css';
import value1 from '../../assets/images/values/1.png';
import value2 from '../../assets/images/values/2.png';
import value3 from '../../assets/images/values/3.png';
import value4 from '../../assets/images/values/4.png';

let valuesData = [
    {
        id: 1,
        image: value1,
        title: "INNOVATION",
        desc: "We constantly seek better, cleaner, and smarter ways to grow.",
    },
    {
        id: 2,
        image: value2,
        title: "INTEGRITY",
        desc: "We rely on science-backed data and transparent reporting.",
    },
    {
        id: 3,
        image: value3,
        title: "STEWARDSHIP",
        desc: "We act as guardians of the soil and environment for future generations.",
    },
    {
        id: 4,
        image: value4,
        title: "COLLABORATION",
        desc: "We believe systemic change requires partnership across the value chain.",
    },
]

const OurValues = () => {
    return (
        <>
            <section className="our-values">
                <h3 data-aos="fade-up">OUR <span>VALUES</span></h3>
                <div className="our-values-row">
                    {
                        valuesData.map((item, index) => {
                            return(
                                <div className="value-box" key={index}>
                                    <img src={item.image} alt={item.title} loading="lazy" />
                                    <div className="value-content" data-aos="fade">
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

export default OurValues
