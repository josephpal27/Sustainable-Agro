import '../css/Home.css';

import homeBanner from '/images/banners/home-banner.jpg';

const Home = () => {
  return (
    <>
      {/* Banner */}
      <div className="banner">
        <img src={homeBanner} alt="Image" loading="lazy" />
      </div>
    </>
  )
}

export default Home
