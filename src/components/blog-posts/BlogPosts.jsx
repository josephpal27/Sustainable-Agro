import { Link } from 'react-router-dom';
import './BlogPosts.css';
import { Button } from '@mui/material';

import blogPost1 from '../../assets/images/blogs/1.jpg';

const BlogPosts = () => {
  return (
    <>
      <section className="blog-posts">
        <h5>BLOG <span>POSTS</span></h5>
        <p>Latin words, combined with a handful of model sentence structures, <br /> to generate Lorem Ipsum which looks reasonable.</p>
        <div className="blog-posts-row">
          <div className="blog-post-card">
            <div className="card-img">
              <img src={blogPost1} alt="Blog Image" loading="lazy" />
            </div>
            <div className="card-desc">
              <div className="desc-content">
                <span className="blog-sub-title">DIET / TIPS & GUIDES</span>
                <span className="blog-title">Tips for Ripening your Fruit</span>
                <p>The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.</p>
                <Link to="/blog"><Button>Read More</Button></Link>
              </div>
            </div>
          </div>
          <div className="blog-post-card">
            <div className="card-img">
              <img src={blogPost1} alt="Blog Image" loading="lazy" />
            </div>
            <div className="card-desc">
              <div className="desc-content">
                <span className="blog-sub-title">DIET / TIPS & GUIDES</span>
                <span className="blog-title">Tips for Ripening your Fruit</span>
                <p>The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.</p>
                <Link to="/blog"><Button>Read More</Button></Link>
              </div>
            </div>
          </div>
          <div className="blog-post-card">
            <div className="card-img">
              <img src={blogPost1} alt="Blog Image" loading="lazy" />
            </div>
            <div className="card-desc">
              <div className="desc-content">
                <span className="blog-sub-title">DIET / TIPS & GUIDES</span>
                <span className="blog-title">Tips for Ripening your Fruit</span>
                <p>The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.</p>
                <Link to="/blog"><Button>Read More</Button></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogPosts
