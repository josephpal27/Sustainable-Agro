import EnvironmentalResponsibility from "../components/environmental-responsibility/EnvironmentalResponsibility"
import EsgBanner from "../components/esg-banner/EsgBanner"
import Governance from "../components/governance/Governance"
import Reporting from "../components/reporting/Reporting"
import SocialImpact from "../components/social-impact/SocialImpact"
import Footer from './../components/footer/Footer';

const EsgImpact = () => {
    return (
        <>
            <EsgBanner />
            <EnvironmentalResponsibility />
            <SocialImpact />
            <Governance />
            <Reporting />
            <Footer />
        </>
    )
}

export default EsgImpact
