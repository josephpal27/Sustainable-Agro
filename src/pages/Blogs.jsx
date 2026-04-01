import BlogContentPillars from "../components/blog-content-pillars/BlogContentPillars"
import BlogListing from "../components/blog-listing/BlogListing"
import BlogsBanner from "../components/blogs-banner/BlogsBanner"
import Footer from "../components/footer/Footer"

const Blogs = () => {
    return (
        <>
            <BlogsBanner />
            <BlogContentPillars />
            <BlogListing />
            <Footer />
        </>
    )
}

export default Blogs
