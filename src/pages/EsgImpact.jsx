import EnvironmentalResponsibility from "../components/environmental-responsibility/EnvironmentalResponsibility"
import EsgBanner from "../components/esg-banner/EsgBanner"
import Governance from "../components/governance/Governance"
import SocialImpact from "../components/social-impact/SocialImpact"

const EsgImpact = () => {
    return (
        <>
            <EsgBanner />
            <EnvironmentalResponsibility />
            <SocialImpact />
            <Governance />
        </>
    )
}

export default EsgImpact
