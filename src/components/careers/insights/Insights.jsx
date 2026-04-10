import './Insights.css';
import { careersData } from '../../../data/careersData';
import { useParams } from 'react-router-dom';

const Insights = () => {

    const { slug } = useParams();

    const job = careersData.find(item => item.slug === slug);

    if (!job) {
        return <p className="no-career-data">No Data Found</p>;
    }

    return (
        <>
            <section className="insights">
                <div className="insights-head">
                    <h2>{job.title}</h2>
                    <p>Posted On : {job.date}</p>
                </div>
                <div className="insights-body">
                    <p>Experience : {job.experience} years</p>
                    <p>Job Type : {job.jobType}</p>
                    <p>Location : {job.location}</p>
                    <p>{job.desc}</p>
                </div>
            </section>
        </>
    )
}

export default Insights
