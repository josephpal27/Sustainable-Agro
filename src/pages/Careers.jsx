import { Helmet } from "react-helmet-async";
import CareersBanner from "../components/careers/careers-banner/CareersBanner"
import Culture from "../components/careers/culture/Culture"
import WhyUs from "../components/careers/why-us/WhyUs"
import Footer from "../components/footer/Footer"
import CareerForm from "../components/careers/career-form/CareerForm";

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
            <CareerForm />
            <Footer />
        </>
    )
}

export default Careers
