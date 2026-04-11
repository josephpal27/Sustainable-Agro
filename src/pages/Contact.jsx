import { Helmet } from "react-helmet-async";
import ContactBanner from "../components/contact-banner/ContactBanner"
import ContactDetails from "../components/contact-details/ContactDetails"
import ContactMap from "../components/contact-map/ContactMap"
import Footer from "../components/footer/Footer"

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Contact - Sustainable Agro</title>
                <meta name="description" content="" />
            </Helmet>

            <ContactBanner />
            <ContactDetails />
            <ContactMap />
            <Footer />
        </>
    )
}

export default Contact
