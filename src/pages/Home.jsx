import '../css/Home.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/effect-fade'; 

import homeBanner1 from '/images/banners/home-banner-1.avif';
import homeBanner2 from '/images/banners/home-banner-2.avif';

const Home = () => {

  return (
    <>
      {/* Banner Slider*/}
      <div className="banner-slider">
        <Swiper
          modules={[Autoplay, EffectFade]}
          spaceBetween={60}
          slidesPerView={1}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop={true}
          // navigation
          effect="fade"
          // fadeEffect={{ crossFade: true }}
        >
          <SwiperSlide>
            <img src={homeBanner1} alt="Banner Slide 1" loading="eager" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={homeBanner2} alt="Banner Slide 2" loading="eager" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default Home
