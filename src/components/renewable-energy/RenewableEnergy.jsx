import './RenewableEnergy.css';
import renewable1 from '../../assets/images/renewable-energy/1.png';
import renewable2 from '../../assets/images/renewable-energy/2.png';
import renewable3 from '../../assets/images/renewable-energy/3.png';

let renewableEnergyData = [
    {
        id: 1,
        image: renewable1,
        title: "Solar Water <br/> Pumping",
        desc: "Replacing diesel pumps with reliable <br/> solar solutions.",
    },
    {
        id: 2,
        image: renewable2,
        title: "Agrivoltaics",
        desc: "Designing solar arrays that allow for machinery access and crop growth underneath.",
    },
    {
        id: 3,
        image: renewable3,
        title: "Biomass <br/> Energy",
        desc: "Converting agricultural waste into <br/> clean power.",
    },
]

const RenewableEnergy = () => {
    return (
        <>
            <section className="renewable-energy">
                <div className="renewable-energy-head">
                    <h2>RENEWABLE ENERGY <br /> <span>INTEGRATION</span></h2>
                    <p>Maximize the utility of your land with our energy solutions. <br /> We specialize in:</p>
                </div>
                <div className="renewable-energy-row">
                    {
                        renewableEnergyData.map((item, index) => {
                            return(
                                <div className="renewable-energy-box" key={index} id={`renewable-energy-box-${item.id}`}>
                                    <img src={item.image} alt={item.title} />
                                    <div className="renewable-content">
                                        <span dangerouslySetInnerHTML={{__html: item.title}}/>
                                        <p dangerouslySetInnerHTML={{__html: item.desc}}/>
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

export default RenewableEnergy;
