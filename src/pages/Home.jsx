import '../css/Home.css';

// import homeBanner1 from '/images/banners/home-banner-1.jpg';
import homeBanner2 from '/images/banners/home-banner-2.avif';

const Home = () => {
  return (
    <>
      {/* Banner */}
      <div className="banner">
        <img src={homeBanner2} alt="Image" loading="lazy" />
      </div>
    </>
  )
}

export default Home
