import './TeamLeadership.css';
import team1 from '../../assets/images/team/1.png';
import team2 from '../../assets/images/team/2.png';
import team3 from '../../assets/images/team/3.png';

import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

let teamData = [
    {   
        id: 1,
        image: team1,
        name: "Alex Adams",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ut tempor labore et dolore.",
        social: [
            {insta: ""},
            {fb: ""},
            {twitter: ""}
        ]
    },
    {   
        id: 2,
        image: team2,
        name: "Alex Adams",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ut tempor labore et dolore.",
        social: [
            {insta: "#"},
            {fb: "#"},
            {twitter: "#"}
        ]
    },
    {   
        id: 3,
        image: team3,
        name: "Alex Adams",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ut tempor labore et dolore.",
        social: [
            {insta: "#"},
            {fb: "#"},
            {twitter: "#"}
        ]
    },
    {   
        id: 4,
        image: team2,
        name: "Alex Adams",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ut tempor labore et dolore.",
        social: [
            {insta: "#"},
            {fb: "#"},
            {twitter: "#"}
        ]
    },
]

const TeamLeadership = () => {
    return (
        <>
            <section className="team">
                <div className="team-head">
                    <h5>TEAM <span>LEADERSHIP</span></h5>
                    <p>Our leadership team brings together decades of experience in agronomy, renewable energy engineering, and corporate sustainability strategy. We are united by a shared commitment to driving measurable change in the global food system.</p>
                </div>
                <div className="team-row">
                    {
                        teamData.map((item, index) => {
                            return(
                                <div className="team-box" key={index}>
                                    <img src={item.image} alt={item.name} loading="lazy" />
                                    <div className="team-content">
                                        <span>{item.name}</span>
                                        <p>{item.desc}</p>
                                        <div className="social-icons">
                                            <a href={item.social[0].insta} target="_blank"><FaInstagram /></a>
                                            <a href={item.social[1].fb} target="_blank"><FaFacebookF /></a>
                                            <a href={item.social[2].twitter} target="_blank"><FaXTwitter /></a>
                                        </div>
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

export default TeamLeadership
