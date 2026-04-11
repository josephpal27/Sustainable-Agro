import { Helmet } from "react-helmet-async";
import CareerDetailsBanner from "../components/careers/career-details-banner/CareerDetailsBanner"
import CareerForm from "../components/careers/career-form/CareerForm"
import Insights from "../components/careers/insights/Insights"
import Footer from "../components/footer/Footer"

const CareersDetails = () => {
    return (
        <>
            <Helmet>
                <title>Career Details - Sustainable Agro</title>
                <meta name="description" content="" />
            </Helmet>

            <CareerDetailsBanner />
            <Insights />
            <CareerForm />
            <Footer />
        </>
    )
}

export default CareersDetails
