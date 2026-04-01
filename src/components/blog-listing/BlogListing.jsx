import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
import './BlogListing.css';

const blogsData = [
    {
        id: 1,
        image: "/images/blogs/4.avif",
        title: "The Economic Case for <br/> Agrivoltaics",
        desc: "An analysis of the ROI when combining solar leases with crop revenue, exploring how dual land use stabilizes farm income.",
    },
    {
        id: 2,
        image: "/images/blogs/5.avif",
        title: "Regenerative Agriculture - <br/> Beyond the Buzzword",
        desc: "Breaking down the specific practices—no-till, cover cropping, crop rotation—that actually result in measurable soil carbon sequestration.",
    },
    {
        id: 3,
        image: "/images/blogs/6.avif",
        title: "Water Security in a <br/> Changing Climate",
        desc: "Strategies for resilience, focusing on drip irrigation efficiency and rainwater harvesting infrastructure.",
    },
    {
        id: 4,
        image: "/images/blogs/4.avif",
        title: "The Economic Case for <br/> Agrivoltaics",
        desc: "An analysis of the ROI when combining solar leases with crop revenue, exploring how dual land use stabilizes farm income.",
    },
    {
        id: 5,
        image: "/images/blogs/5.avif",
        title: "Regenerative Agriculture - <br/> Beyond the Buzzword",
        desc: "Breaking down the specific practices—no-till, cover cropping, crop rotation—that actually result in measurable soil carbon sequestration.",
    },
    {
        id: 6,
        image: "/images/blogs/6.avif",
        title: "Water Security in a <br/> Changing Climate",
        desc: "Strategies for resilience, focusing on drip irrigation efficiency and rainwater harvesting infrastructure.",
    },
]

const BlogListing = () => {
    return (
        <>
            <section className="blog-listing">
                <div className="blog-listing-head">
                    <h3>ARTICLE <span>TOPICS</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus excepturi ex quos placeat recusandae, tempora inventore voluptate sint voluptates Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                {/* Row */}
                <div className="blogs-row">
                    {
                        blogsData.map((item, index) => {
                            return (
                                <div className="blog-card" key={index}>
                                    <div className="card-image">
                                        <img src={item.image} alt={`Blog ${item.id}`} loading="lazy" />
                                    </div>
                                    <div className="card-desc">
                                        <span dangerouslySetInnerHTML={{__html: item.title}} />
                                        <p>{item.desc}</p>
                                        <Link to="/blogs/">Explore <FaArrowRightLong className="icn" /></Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default BlogListing
