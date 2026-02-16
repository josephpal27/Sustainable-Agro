import Advisory from "../components/advisory/Advisory";
import Footer from "../components/footer/Footer";
import RenewableEnergy from "../components/renewable-energy/RenewableEnergy";
import SolutionsBanner from "../components/solutions-banner/SolutionsBanner";
import TechnologyInnovation from "../components/technology-innovation/TechnologyInnovation";
import Training from "../components/training/Training";

const Solutions = () => {
    return (
        <>
            <SolutionsBanner />
            <RenewableEnergy />
            <Advisory />
            <TechnologyInnovation />
            <Training />
            <Footer />
        </>
    )
}

export default Solutions;
