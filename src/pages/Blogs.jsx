import { Helmet } from "react-helmet-async"
import BlogContentPillars from "../components/blog-content-pillars/BlogContentPillars"
import BlogListing from "../components/blog-listing/BlogListing"
import BlogsBanner from "../components/blogs-banner/BlogsBanner"
import Footer from "../components/footer/Footer"

const Blogs = () => {
    return (
        <>
            <Helmet>
                <title>Blogs - Sustainable Agro</title>
                <meta name="description" content="" />
            </Helmet>

            <BlogsBanner />
            <BlogContentPillars />
            <BlogListing />
            <Footer />
        </>
    )
}

export default Blogs
