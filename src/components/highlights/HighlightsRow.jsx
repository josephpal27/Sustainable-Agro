import { Link } from 'react-router-dom';
import './HighlightsRow.css';

import highlightImg1 from '../../assets/images/icons/garden.png';
import highlightImg2 from '../../assets/images/icons/urban.png';
import highlightImg3 from '../../assets/images/icons/maintenance.png';
import highlightImg4 from '../../assets/images/icons/fence.png';

import grassImg from '../../assets/images/icons/grass.svg';

const HighlightsRow = () => {

    let highlightsContent = [
        {
            id: 1,
            img: highlightImg1,
            title: "Productive Gardens & Landscapes",
            description: "Beautiful, carbon-capturing landscapes optimized for maximum agricultural yield.",
        },
        {
            id: 2,
            img: highlightImg2,
            title: "Urban Greening & Energy Efficiency",
            description: "Cooling cities and lowering energy costs through innovative urban farming.",
        },
        {
            id: 3,
            img: highlightImg3,
            title: "Asset Maintenance & Operations",
            description: "Year-round expert care to keep your green and renewable assets peaking.",
        },
        {
            id: 4,
            img: highlightImg4,
            title: "Education & Community Events",
            description: "Engaging workshops and training to inspire sustainable, regenerative practices.",
        },
    ]

    return (
        <>
            <section className="highlights">
                <div className="highlights-cards-row">
                    {
                        highlightsContent.map((item, index) => {
                            return (
                                <div className="highlight-card" key={index}>
                                    <img src={item.img} alt="Icon" loading="lazy" />
                                    <span>{item.title}</span>
                                    <p>{item.description}</p>
                                    <Link to="/solutions">Read More</Link>
                                </div>
                            )
                        })
                    }
                    <img src={grassImg} alt="Grass" className="grass" loading="lazy" />
                </div>
            </section>
        </>
    )
}

export default HighlightsRow
