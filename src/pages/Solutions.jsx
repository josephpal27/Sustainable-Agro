import Advisory from "../components/advisory/Advisory";
import RenewableEnergy from "../components/renewable-energy/RenewableEnergy";
import SolutionsBanner from "../components/solutions-banner/SolutionsBanner";
import TechnologyInnovation from "../components/technology-innovation/TechnologyInnovation";

const Solutions = () => {
    return (
        <>
            <SolutionsBanner />
            <RenewableEnergy />
            <Advisory />
            <TechnologyInnovation />
        </>
    )
}

export default Solutions;
