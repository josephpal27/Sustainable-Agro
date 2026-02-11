import HighlightsRow from '../components/highlights/HighlightsRow';
import WhoWeAre from '../components/who-we-are/WhoWeAre';
import FoundersMessage from '../components/founders-message/FoundersMessage';
import OurOfferings from '../components/our-offerings/OurOfferings';
import BlogPosts from '../components/blog-posts/BlogPosts';
import Footer from '../components/footer/Footer';
import HomeBanner from '../components/home-banner/HomeBanner';
import Innovation from '../components/innovation/Innovation';

const Home = () => {

  return (
    <>
      <HomeBanner />
      <HighlightsRow />
      <WhoWeAre />
      <FoundersMessage />
      <OurOfferings />
      <Innovation />
      <BlogPosts />
      <Footer />
    </>
  )
}

export default Home
