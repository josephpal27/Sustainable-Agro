import { Link } from 'react-router-dom';
import './BlogPosts.css';
import { Button } from '@mui/material';

const BlogPosts = () => {

  let blogPostsContent = [
    {
      id: 1,
      date: 2,
      month: "Jan",
      img: "images/blogs/1.avif",
      subTitle: "DIET / TIPS & GUIDES",
      title: "Tips for Ripening your Fruit",
      description: "The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.",
    },
    {
      id: 2,
      date: 5,
      month: "Feb",
      img: "images/blogs/2.avif",
      subTitle: "ORGANIC FOOD / TIPS & GUIDES",
      title: "Health Benefits of a Raw Food",
      description: "The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.",
    },
    {
      id: 3,
      date: 7,
      month: "Dec",
      img: "images/blogs/3.avif",
      subTitle: "DIET / TIPS & GUIDES",
      title: "Foods you should be eating",
      description: "The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.",
    },
  ]

  return (
    <>
      <section className="blog-posts">
        <h5 data-aos="fade-up">BLOG <span>POSTS</span></h5>
        <p data-aos="fade">Latin words, combined with a handful of model sentence structures, <br /> to generate Lorem Ipsum which looks reasonable.</p>
        <div className="blog-posts-row">
          {
            blogPostsContent.map((item, index) => {
              return (
                <div className="blog-post-card" key={index} data-aos="fade">
                  <div className="blog-post-date">
                    <span className="blog-date">{item.date}</span>
                    <span className="blog-month">{item.month}</span>
                  </div>
                  <div className="card-img">
                    <img src={item.img} alt="Blog Image" loading="lazy" />
                  </div>
                  <div className="card-desc">
                    <div className="desc-content">
                      <span className="blog-sub-title">{item.subTitle}</span>
                      <span className="blog-title">{item.title}</span>
                      <p>{item.description}</p>
                      <Link to="/blogs"><Button>Read More</Button></Link>
                    </div>
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

export default BlogPosts
