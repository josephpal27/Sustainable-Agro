import { Helmet } from "react-helmet-async";
import AboutBanner from '../components/about-banner/AboutBanner'
import AboutFeatured from '../components/about-featured/AboutFeatured'
import MissionVision from '../components/mission-vision/MissionVision'
import OurImpact from '../components/our-impact/OurImpact'
import OurValues from '../components/our-values/OurValues'
import TeamLeadership from '../components/team-leadership/TeamLeadership'
import Footer from '../components/footer/Footer';

const About = () => {
    return (
        <>
            <Helmet>
                <title>About Us - Sustainable Agro</title>
                <meta name="description" content="" />
            </Helmet>

            <AboutBanner />
            <AboutFeatured />
            <MissionVision />
            <OurValues />
            <OurImpact />
            <TeamLeadership />
            <Footer />
        </>
    )
}

export default About
