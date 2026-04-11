import { Helmet } from "react-helmet-async";
import CareersBanner from "../components/careers/careers-banner/CareersBanner"
import Culture from "../components/careers/culture/Culture"
import OpenPositions from "../components/careers/open-positions/OpenPositions"
import WhyUs from "../components/careers/why-us/WhyUs"
import Footer from "../components/footer/Footer"

const Careers = () => {
    return (
        <>
            <Helmet>
                <title>Careers - Sustainable Agro</title>
                <meta name="description" content="" />
            </Helmet>

            <CareersBanner />
            <WhyUs />
            <Culture />
            <OpenPositions />
            <Footer />
        </>
    )
}

export default Careers
