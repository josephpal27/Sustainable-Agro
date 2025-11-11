import { Link } from 'react-router-dom';
import './HighlightsRow.css';

import highlightImg1 from '../../assets/images/icons/garden.png';
import highlightImg2 from '../../assets/images/icons/urban.png';
import highlightImg3 from '../../assets/images/icons/maintenance.png';
import highlightImg4 from '../../assets/images/icons/fence.png';

const HighlightsRow = () => {

    let highlightsContent = [
        {
            id: 1,
            img: highlightImg1,
            title: "Gardens",
            description: "Get expert advice on how to design a garden.",
        },
        {
            id: 2,
            img: highlightImg2,
            title: "Urban",
            description: "Plants are expensive and need to be looked after.",
        },
        {
            id: 3,
            img: highlightImg3,
            title: "Maintenance",
            description: "Keep your green garden low maintenance.",
        },
        {
            id: 4,
            img: highlightImg4,
            title: "Events",
            description: "Fun programs for adults, children and families.",
        },
    ]

    return (
        <>
            <div className="highlights-cards-row">
                {
                    highlightsContent.map((item, index) => {
                        return (
                            <div className="highlight-card" key={index}>
                                <img src={item.img} alt="Icon" loading="lazy" />
                                <span>{item.title}</span>
                                <p>{item.description}</p>
                                <Link to="/">Read More</Link>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default HighlightsRow
