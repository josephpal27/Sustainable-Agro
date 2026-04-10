import { Link } from 'react-router-dom';
import './OpenPositions.css';
import { careersData } from '../../../data/careersData';

const OpenPositions = () => {

    const getDaysAgoText = (dateString) => {
        const [day, month, year] = dateString.split("-");
        const postedDate = new Date(`${year}-${month}-${day}`);
        const today = new Date();

        const diffDays = Math.floor((today - postedDate) / (1000 * 60 * 60 * 24));

        if (diffDays === 0) return "Posted today";
        if (diffDays === 1) return "Posted 1 day ago";

        return `Posted ${diffDays} days ago`;
    };

    return (
        <>
            <section className="career-options">
                <div className="career-opt-head">
                    <h4 data-aos="fade-right" data-aos-once="true">OPEN POSITIONS - ({careersData.length})</h4>
                    <span>Role</span>
                </div>
                <div className="career-row">
                    {
                        careersData.map((item, index) => {
                            return (
                                <div className="career-card" key={index}>
                                    <div className="career-card-left">
                                        <span>{item.title}</span>
                                        <p>Experience - {item.experience} years</p>
                                        <p>{getDaysAgoText(item.date)}</p>
                                        <p className="career-desc">{item.desc}</p>
                                    </div>
                                    <div className="career-card-right">
                                        <Link to={`/careers/${item.slug}`}>
                                            Job Insights
                                        </Link>
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

export default OpenPositions
